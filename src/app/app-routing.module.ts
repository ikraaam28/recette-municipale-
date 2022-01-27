import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HomePageComponent} from "./home-page/home-page.component";
import {ProblemeComponent} from "./probleme/probleme.component";
import {PaiementComponent} from "./paiement/paiement.component";
import {SignupPaiementComponent} from "./signup-paiement/signup-paiement.component";
import {LoginPaiementComponent} from "./login-paiement/login-paiement.component";
import {PageclientComponent} from "./pageclient/pageclient.component";
import {AddimobComponent} from "./addimob/addimob.component";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'probleme', component: ProblemeComponent},
  {path:'paiement',component:PaiementComponent},
  {path:'signuppaiement',component:SignupPaiementComponent},
  {path:'loginpaiement',component:LoginPaiementComponent},
  {path:'pageclient',component:PageclientComponent},
  {path:'addimob',component:AddimobComponent},
  {path:'admin',component:AdminComponent},
  {path:'', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
