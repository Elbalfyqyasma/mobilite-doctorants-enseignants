import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Page } from 'src/app/models/page/page.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  Users: any[] = []; // Updated type to specify it as an array
  formInline!: FormGroup;
  searchFormGroup!:FormGroup;
  pageSize: number =5 ;
  currentPage : number=0 ;
  totalPages : number=0;
  errorMessage: any;
  roles: any[] = [];

  
  constructor(private formBuilder: FormBuilder, private UserS: UserService, private ngZone: NgZone, private router: Router) {}

  ngOnInit(): void {
    this.handleGetPageUser();
    this.searchFormGroup = this.formBuilder.group({
      Keyword: ['', Validators.required]
    });

  }


  delete(User: any) {
        this.UserS.deleteUser(User.id).subscribe(
          () => {
            this.Users.splice(this.Users.indexOf(User), 1);
          },
          (error) => {
            console.log('Erreur lors de la suppression de Ced :', error);
          }
        );
  };


  
  goToCreatePage() {
    this.router.navigateByUrl('full/cdes/create');
  }
  


  handleGetPageUser(): void {
    this.UserS.getPageUSER(this.currentPage, this.pageSize).subscribe(
        (data: Page) => {
            this.Users = data.data.map((Ced, index) => ({
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
    this.Users.forEach((Users, index) => {
      Users.index = startingIndex + index;
    });
  
    this.handleGetPageUser();
  }


  changePageSize(event: any) {
    const size = event.target.value;
    this.pageSize = Number(size);
    this.currentPage = 0; // Reset current page to the first page
    this.handleGetPageUser(); // Fetch the CEDs data for the new page size

  }



  handleSearchUser(){
    let Keyword= this.searchFormGroup.value.Keyword;
    console.log(Keyword);
    this.UserS.searchByNom(Keyword).subscribe({    
     next:(data:User[] )=>{
         this.Users= data;
     }
    })
  }
  
  
  onRoleChange(role:any){

  }
  
  

}
