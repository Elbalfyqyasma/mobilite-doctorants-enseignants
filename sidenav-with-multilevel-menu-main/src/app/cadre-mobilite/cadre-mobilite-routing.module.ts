import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadreMobiliteEditComponent } from './cadre-mobilite-edit/cadre-mobilite-edit.component';
import { CadresMobiliteListComponent } from './cadre-mobilite-list/cadre-mobilite-list.component';
import { CadreMobiliteComponent } from './cadre-mobilite.component';

const routes: Routes = [
  {
  path: 'create',
  component: CadreMobiliteComponent
},
{
  path: 'list',
  component: CadresMobiliteListComponent,
},
{
  path: 'edit/:id',
  component: CadreMobiliteEditComponent,
}




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadreMobiliteRoutingModule { }
