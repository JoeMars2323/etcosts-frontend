import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from '../app/modules/main/main.component';
import { LoginComponent } from '../app/modules/login/login.component';
import { CreateLoginComponent } from '../app/modules/create-login/create-login.component';
import { PersonalComponent } from '../app/modules/personal/personal.component';
import { AboutComponent } from '../app/modules/about/about.component';
import { ServicesComponent } from '../app/modules/services/services.component';
import { ContactsComponent } from '../app/modules/contacts/contacts.component';
import { FaqComponent } from '../app/modules/faq/faq.component';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'createAccount', component: CreateLoginComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
