import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from '../app/modules/public/public.component';
import { PersonalComponent } from '../app/modules/personal/personal.component';
import { LoginComponent } from '../app/modules/login/do-login/login.component';
import { CreateLoginComponent } from '../app/modules/login/create-login/create-login.component';
import { HomeComponent } from './modules/public/home/home.component';
import { AboutComponent } from './modules/public/about/about.component';
import { ContactsComponent } from './modules/public/contacts/contacts.component';
import { FaqComponent } from './modules/public/faq/faq.component';
import { ServicesComponent } from './modules/public/services/services.component';

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
  { path: 'personal', component: PersonalComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
