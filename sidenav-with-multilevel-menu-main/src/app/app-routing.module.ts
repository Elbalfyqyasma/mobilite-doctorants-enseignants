import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './full/full.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';
import { RequestResetComponent } from './request-reset/request-reset.component';
import { ResponseResetComponent } from './response-reset/response-reset.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  {
    path: 'full',
    component: FullComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule)
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule)
      },
      {
        path: 'cdes',
        loadChildren: () => import('./cdes/cdes.module').then((m) => m.CdesModule)
      },
      { path: 'settings', component: SettingsComponent },
      {
        path: 'SRecherche',
        loadChildren: () =>
          import('./structure-recherche/structure-recherche.module').then((m) => m.StructureRechercheModule)
      },
      {
        path: 'CadreMobilite',
        loadChildren: () =>
          import('./cadre-mobilite/cadre-mobilite.module').then((m) => m.CadreMobiliteModule)
      },
      {
        path: 'Projet',
        loadChildren: () =>
          import('./projet/projet.module').then((m) => m.ProjetModule)
      },
     

      { path: 'profil', component: ProfilComponent }
    ]
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
