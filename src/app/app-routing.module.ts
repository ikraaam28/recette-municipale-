import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HomePageComponent} from "./home-page/home-page.component";
import {ProblemeComponent} from "./probleme/probleme.component";
import {PaiementComponent} from "./paiement/paiement.component";
import {SignupPaiementComponent} from "./signup-paiement/signup-paiement.component";

import {PageclientComponent} from "./pageclient/pageclient.component";
import {AddimobComponent} from "./addimob/addimob.component";
import {AdminComponent} from "./admin/admin.component";
import {AddimobmunicComponent} from "./addimobmunic/addimobmunic.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'probleme', component: ProblemeComponent},
  {path:'paiement/:id/:localisation',component:PaiementComponent},
  {path:'signuppaiement',component:SignupPaiementComponent},
  {path:'pageclient',component:PageclientComponent},
  {path:'addimob',component:AddimobComponent},
  {path:'admin',component:AdminComponent},
  {path:'addimobmunic',component:AddimobmunicComponent},

  {path:'', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
