import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Page } from 'src/app/models/page/page.model';
import { StructureRechercheService } from 'src/app/Services/StructureRecherche/structure-recherche.service';
import { StructureRecherche } from 'src/app/models/structure-recherche';
import { CdeService } from 'src/app/Services/cde/cde.service';

@Component({
  selector: 'app-structure-recherche-list',
  templateUrl: './structure-recherche-list.component.html',
  styleUrls: ['./structure-recherche-list.component.css']
})
export class StructureRechercheListComponent {
  sRecherches: any[] = []; // Updated type to specify it as an array
  formInline!: FormGroup;
  searchFormGroup!:FormGroup;
  pageSize: number =5 ;
  currentPage : number=0 ;
  totalPages : number=0;
  errorMessage: any;
  ceds: any[] = [];

  selectedCedId: number | null = null;



  constructor(private formBuilder: FormBuilder, private structureS: StructureRechercheService, private ngZone: NgZone, private router: Router,private toastr: ToastrService,private cedS: CdeService) {}

  ngOnInit(): void {
    this.fetchCEDs() ;
    this.handleGetPageStructure();
    this.selectedCedId = null; // Add this line

 
    this.searchFormGroup = this.formBuilder.group({
      Keyword: ['', Validators.required]
    });

  }



  delete(StructureRecherche: any) {
    this.structureS.deleteStructureRecherche(StructureRecherche.id).subscribe(
      () => {
        this.sRecherches.splice(this.sRecherches.indexOf(StructureRecherche), 1);
      },
      (error) => {
        console.log('Erreur lors de la suppression de StructureRecherche :', error);
      }
    );
};


handleGetPageStructure(): void {
  this.structureS.getPageStructureRecherche(this.currentPage, this.pageSize).subscribe(
    (data: Page) => {
      this.sRecherches = data.data.map((structureR, index) => {
        const intitule = this.getCedIntitule(structureR.ced_id);
        return {
          ...structureR,
          index: (this.currentPage * this.pageSize) + index + 1,
          intitule: intitule
        };
      });
      this.totalPages = data.totalPages;
    },
    (error) => {
      this.errorMessage = error;
    }
  );
};


getCedIntitule(cedId: number): string {
  const ced = this.ceds.find(c => c.id === cedId);
  return ced ? ced.intitule : '';
}




gotoPage(i: number) {
  this.currentPage = i;

  // Calculate the starting index of the current page
  const startingIndex = this.currentPage * this.pageSize + 1;

  // Update the table index values
  this.sRecherches.forEach((structureR, index) => {
    structureR.index = startingIndex + index;
  });

  this.handleGetPageStructure();
}

changePageSize(event: any) {
  const size = event.target.value;
  this.pageSize = Number(size);
  this.currentPage = 0; // Reset current page to the first page
  this.handleGetPageStructure(); // Fetch the CEDs data for the new page size

}



handleSearchStructure(){
  let Keyword= this.searchFormGroup.value.Keyword;
  console.log(Keyword);
  this.structureS.searchByIntitule(Keyword).subscribe({    
   next:(data:StructureRecherche[] )=>{
       this.sRecherches= data;
   }
  })
}

  
goToCreatePage() {
  this.router.navigateByUrl('full/SRecherche/create');
}

fetchCEDs() {
  this.cedS.getCeds().subscribe(
    (response) => {
      this.ceds = response;
    },
    (error) => {
      console.log(error);
    }
  );
}



onCedChange(cedId: number): void {
  this.selectedCedId = cedId;

  this.structureS.searchByCed(cedId).subscribe({    
    next:(data:StructureRecherche[] )=>{
        this.sRecherches= data;
    }
   })

}


}