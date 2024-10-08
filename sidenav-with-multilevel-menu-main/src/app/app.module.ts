import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { HeaderComponent } from './header/header.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { LoginComponent } from './login/login.component';
import { FullComponent } from './full/full.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { JarwisService } from './Services/jarwis.service';
import { TokenService } from './Services/token.service';
import { AfterLoginService } from './Services/after-login.service';
import { BeforeLoginService } from './Services/before-login.service';

import { ResponseResetComponent } from './response-reset/response-reset.component';
import { RequestResetComponent } from './request-reset/request-reset.component';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';

import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { StructureRechercheComponent } from './structure-recherche/structure-recherche.component';
import { CadreMobiliteComponent } from './cadre-mobilite/cadre-mobilite.component';
import { ProfilComponent } from './profil/profil.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';

import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    SettingsComponent,
    SublevelMenuComponent,
    HeaderComponent,
    LoginComponent,
    FullComponent,
    RegisterComponent,
    ResponseResetComponent,
    RequestResetComponent,
    StructureRechercheComponent,
    CadreMobiliteComponent,
    ProfilComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OverlayModule,
    CdkMenuModule,
    ReactiveFormsModule,
    FormsModule, 
    HttpClientModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatIconModule ,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,

  ],
  providers: [JarwisService,TokenService,AfterLoginService,BeforeLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
