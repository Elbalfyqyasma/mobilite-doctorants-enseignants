import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructureRechercheEditComponent } from './structure-recherche-edit/structure-recherche-edit.component';
import { StructureRechercheListComponent } from './structure-recherche-list/structure-recherche-list.component';
import { StructureRechercheComponent } from './structure-recherche.component';

const routes: Routes = [
{
  path: 'create',
  component: StructureRechercheComponent
},
{
  path: 'list',
  component: StructureRechercheListComponent,

},
{
  path: 'edit/:id',
  component: StructureRechercheEditComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructureRechercheRoutingModule { }
