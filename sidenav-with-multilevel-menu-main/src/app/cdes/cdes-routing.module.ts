import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdesEditComponent } from './cdes-edit/cdes-edit.component';
import { CdesListComponent } from './cdes-list/cdes-list.component';

import { CdesComponent } from './cdes.component';

const routes: Routes = [  {
  path: 'create',
  component: CdesComponent
},
{
  path: 'list',
  component: CdesListComponent,
},
{
  path: 'edit/:id',
  component: CdesEditComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdesRoutingModule { }
