import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdesRoutingModule } from './cdes-routing.module';
import { CdesListComponent } from './cdes-list/cdes-list.component';
import { CdesComponent } from './cdes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CdesEditComponent } from './cdes-edit/cdes-edit.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    CdesListComponent,
    CdesComponent,
    CdesEditComponent
  ],
  imports: [
    CommonModule,
    CdesRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot(),


  ]
})
export class CdesModule { }
