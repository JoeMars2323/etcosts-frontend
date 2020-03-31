import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from '../app/modules/main/main.component';
import { LoginComponent } from '../app/modules/login/login.component';
import { CreateLoginComponent } from '../app/modules/create-login/create-login.component';
import { PersonalComponent } from '../app/modules/personal/personal.component';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'searchByUser', component: LoginComponent },
  { path: 'createAccount', component: CreateLoginComponent },
  { path: 'personal', component: PersonalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
