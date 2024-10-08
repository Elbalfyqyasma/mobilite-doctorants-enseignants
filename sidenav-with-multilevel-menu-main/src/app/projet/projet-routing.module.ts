import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetEditComponent } from './projet-edit/projet-edit.component';
import { ProjetListComponent } from './projet-list/projet-list.component';
import { ProjetComponent } from './projet.component';

const routes: Routes = [
   
      { path: 'create', component: ProjetComponent },
      { path: 'list', component: ProjetListComponent },
      { path: 'edit/:id', component: ProjetEditComponent }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetRoutingModule {}
