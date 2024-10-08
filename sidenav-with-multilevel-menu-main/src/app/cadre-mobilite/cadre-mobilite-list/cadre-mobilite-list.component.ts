import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CadreMobilite } from 'src/app/models/cadre-mobilite';
import { Page } from 'src/app/models/page/page.model';

import { CadreMobiliteService } from 'src/app/Services/CadreMobilite/cadre-mobilite.service';


@Component({
  selector: 'app-cadres-mobilite-list',
  templateUrl: './cadre-mobilite-list.component.html',
  styleUrls: ['./cadre-mobilite-list.component.css']
})
export class CadresMobiliteListComponent {
  cadresMobilite: any[] = [];
  formInline!: FormGroup;
  searchFormGroup!: FormGroup;
  pageSize: number = 5;
  currentPage: number = 0;
  totalPages: number = 0;
  errorMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private cadreMobiliteService: CadreMobiliteService,
    private ngZone: NgZone,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.handleGetPageCadreMobilite()

    this.searchFormGroup = this.formBuilder.group({
      Keyword: ['', Validators.required]
    });
  }

  delete(cadreMobilite: CadreMobilite) {
    this.cadreMobiliteService.deleteCadreMobilite(cadreMobilite.id).subscribe(
      () => {
        this.cadresMobilite.splice(this.cadresMobilite.indexOf(cadreMobilite), 1);
      },
      (error) => {
        console.log('Erreur lors de la suppression du cadre de mobilité :', error);
      }
    );
  }

  goToCreatePage() {
    this.router.navigateByUrl('full/CadreMobilite/create');
  }

  handleGetPageCadreMobilite(): void {
    this.cadreMobiliteService.getPageCadresMobilite(this.currentPage, this.pageSize).subscribe(
      (data: Page)=> {
        this.cadresMobilite = data.data.map((cadreMobilite, index) => ({
          ...cadreMobilite,
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
    this.cadresMobilite.forEach((cadreMobilite, index) => {
      cadreMobilite.index = startingIndex + index;
    });
    

    this.handleGetPageCadreMobilite();
  }

  changePageSize(event: any) {
    const size = event.target.value;
    this.pageSize = Number(size);
    this.currentPage = 0; // Reset current page to the first page
    this.handleGetPageCadreMobilite(); // Fetch the cadre mobilite data for the new page size
  }

  handleSearchCadreMobilite() {
    let keyword = this.searchFormGroup.value.Keyword;
    console.log(keyword);
    this.cadreMobiliteService.searchCadresMobilite(keyword).subscribe({
      next: (data: CadreMobilite[]) => {
        this.cadresMobilite = data;
      }
    });
  }


  
}
