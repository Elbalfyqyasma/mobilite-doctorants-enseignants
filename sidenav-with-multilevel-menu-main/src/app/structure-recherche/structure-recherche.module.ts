import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructureRechercheRoutingModule } from './structure-recherche-routing.module';
import { StructureRechercheListComponent } from './structure-recherche-list/structure-recherche-list.component';
import { StructureRechercheEditComponent } from './structure-recherche-edit/structure-recherche-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StructureRechercheListComponent,
    StructureRechercheEditComponent
  ],
  imports: [
    CommonModule,
    StructureRechercheRoutingModule,
    ReactiveFormsModule
  ]
})


export class StructureRechercheModule { }
