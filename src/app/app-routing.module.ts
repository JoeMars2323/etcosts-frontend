import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public/public.component';
import { LoginComponent } from './login/login.component';
import { CreateLoginComponent } from './login/create-login/create-login.component';
import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { ContactsComponent } from './public/contacts/contacts.component';
import { FaqComponent } from './public/faq/faq.component';
import { ServicesComponent } from './public/services/services.component';



import { RestrictComponent } from './restrict/restrict.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: '', component: PublicComponent, children: [
     { path: 'principal', component: HomeComponent },
     { path: 'sobre', component: AboutComponent },
     { path: 'contactos', component: ContactsComponent },
     { path: 'faq', component: FaqComponent },
     { path: 'servicos', component: ServicesComponent },
   ] },
  { path: 'login', component: LoginComponent },
  { path: 'criar-conta', component: CreateLoginComponent },
  { path: 'restrito', component: RestrictComponent, children:[
    
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
