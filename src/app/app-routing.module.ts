import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from '../app/public/public.component';
import { PersonalComponent } from '../app/personal/personal.component';
import { LoginComponent } from '../app/login/login.component';
import { CreateLoginComponent } from '../app/login/create-login/create-login.component';
import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { ContactsComponent } from './public/contacts/contacts.component';
import { FaqComponent } from './public/faq/faq.component';
import { ServicesComponent } from './public/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: '', component: PublicComponent, children: [
     { path: 'home', component: HomeComponent },
     { path: 'sobre', component: AboutComponent },
     { path: 'contactos', component: ContactsComponent },
     { path: 'faq', component: FaqComponent },
     { path: 'servicos', component: ServicesComponent },
   ] },
  { path: 'login', component: LoginComponent },
  { path: 'createAccount', component: CreateLoginComponent },
  { path: 'personal', component: PersonalComponent, children:[
    
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
