import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from '../app/modules/public/public.component';
import { PersonalComponent } from '../app/modules/personal/personal.component';
import { LoginComponent } from '../app/modules/login/do-login/login.component';
import { CreateLoginComponent } from '../app/modules/login/create-login/create-login.component';




const routes: Routes = [
  { path: '', component: PublicComponent },
  { path: 'login', component: LoginComponent },
  { path: 'createAccount', component: CreateLoginComponent },
  { path: 'personal', component: PersonalComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
