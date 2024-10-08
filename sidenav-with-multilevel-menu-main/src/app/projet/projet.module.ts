import { NgModule } from '@angular/core';



import { ProjetEditComponent } from './projet-edit/projet-edit.component';
import { ProjetListComponent } from './projet-list/projet-list.component';

import { HttpClientModule } from '@angular/common/http';
import { CdkMenuModule } from '@angular/cdk/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppRoutingModule } from '../app-routing.module';


import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { ProjetComponent } from './projet.component';
import { CommonModule } from '@angular/common';
import { ProjetRoutingModule } from './projet-routing.module';




@NgModule({
  declarations: [
    ProjetComponent,
    ProjetEditComponent,
    ProjetListComponent
  ],
  imports: [

    FormsModule,
    OverlayModule,
    CdkMenuModule,
    MatDialogModule,
    MatIconModule ,
    MatFormFieldModule,
    MatInputModule,
    
    MatSelectModule,
    MatButtonModule,
  
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    ProjetRoutingModule

  ],

})
export class ProjetModule { }
