import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadreMobiliteRoutingModule } from './cadre-mobilite-routing.module';
import { CadreMobiliteEditComponent } from './cadre-mobilite-edit/cadre-mobilite-edit.component';
import { CadresMobiliteListComponent } from './cadre-mobilite-list/cadre-mobilite-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    CadreMobiliteEditComponent,
    CadresMobiliteListComponent
  ],
  imports: [
    CommonModule,
    CadreMobiliteRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot(),
  ]
})
export class CadreMobiliteModule {






 }
