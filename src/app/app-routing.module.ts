import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicMainComponent } from '../app/modules/public/public-main/public-main.component';
import { LoginComponent } from '../app/modules/login/do-login/login.component';
import { CreateLoginComponent } from '../app/modules/login/create-login/create-login.component';
import { PersonalMainComponent } from '../app/modules/restrict/personal-main/personal-main.component';



const routes: Routes = [
  { path: 'main', component: PublicMainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'createAccount', component: CreateLoginComponent },
  { path: 'personal', component: PersonalMainComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
