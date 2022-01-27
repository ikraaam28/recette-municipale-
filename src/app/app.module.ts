import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProblemeComponent } from './probleme/probleme.component';
import { PaiementComponent } from './paiement/paiement.component';
import { SignupPaiementComponent } from './signup-paiement/signup-paiement.component';
import { LoginPaiementComponent } from './login-paiement/login-paiement.component';
import { PageclientComponent } from './pageclient/pageclient.component';
import {HttpClientModule} from "@angular/common/http";
import { AddimobComponent } from './addimob/addimob.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    NavbarComponent,
    ProblemeComponent,
    PaiementComponent,
    SignupPaiementComponent,
    LoginPaiementComponent,
    PageclientComponent,
    AddimobComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
