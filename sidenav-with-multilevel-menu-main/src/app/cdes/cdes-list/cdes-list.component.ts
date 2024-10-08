import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ced } from 'src/app/models/ced';
import { Page } from 'src/app/models/page/page.model';
import { CdeService } from 'src/app/Services/cde/cde.service';
import Swal, { SweetAlertCustomClass } from 'sweetalert2';


@Component({
  selector: 'app-cdes-list',
  templateUrl: './cdes-list.component.html',
  styleUrls: ['./cdes-list.component.css']
})
export class CdesListComponent {
  Ceds: any[] = []; // Updated type to specify it as an array
  formInline!: FormGroup;
  searchFormGroup!:FormGroup;
  pageSize: number =5 ;
  currentPage : number=0 ;
  totalPages : number=0;
  errorMessage: any;


  
  constructor(private formBuilder: FormBuilder, private cedS: CdeService, private ngZone: NgZone, private router: Router,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.handleGetPageCed();

    this.searchFormGroup = this.formBuilder.group({
      Keyword: ['', Validators.required]
    });

  }


  delete(Ced: any) {
        this.cedS.deleteCed(Ced.id).subscribe(
          () => {
            this.Ceds.splice(this.Ceds.indexOf(Ced), 1);
          },
          (error) => {
            console.log('Erreur lors de la suppression de Ced :', error);
          }
        );
  };


  
  goToCreatePage() {
    this.router.navigateByUrl('full/cdes/create');
  }
  


  handleGetPageCed(): void {
    this.cedS.getPageCED(this.currentPage, this.pageSize).subscribe(
        (data: Page) => {
            this.Ceds = data.data.map((Ced, index) => ({
                ...Ced,
                index: (this.currentPage * this.pageSize) + index + 1
            }));
            this.totalPages = data.totalPages;
        },
        (error) => {
            this.errorMessage = error;
        }
    );
}

  
  

  gotoPage(i: number) {
    this.currentPage = i;
  
    // Calculate the starting index of the current page
    const startingIndex = this.currentPage * this.pageSize + 1;
  
    // Update the table index values
    this.Ceds.forEach((Ced, index) => {
      Ced.index = startingIndex + index;
    });
  
    this.handleGetPageCed();
  }


  changePageSize(event: any) {
    const size = event.target.value;
    this.pageSize = Number(size);
    this.currentPage = 0; // Reset current page to the first page
    this.handleGetPageCed(); // Fetch the CEDs data for the new page size

  }



  handleSearchCed(){
    let Keyword= this.searchFormGroup.value.Keyword;
    console.log(Keyword);
    this.cedS.searchByLibelle(Keyword).subscribe({    
     next:(data:Ced[] )=>{
         this.Ceds= data;
     }
    })
  }
  
  
  
  
}
