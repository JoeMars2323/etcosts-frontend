import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './modules/main/main.component';
import { LoginComponent } from './modules/login/login.component';
import { FormsModule } from '@angular/forms';
import { CreateLoginComponent } from './modules/create-login/create-login.component';
import { PersonalComponent } from './modules/personal/personal.component';
import { AboutComponent } from './modules/about/about.component';
import { ServicesComponent } from './modules/services/services.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { FaqComponent } from './modules/faq/faq.component';
import { AuthenticationService } from './core/services/authentication/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    CreateLoginComponent,
    PersonalComponent,
    AboutComponent,
    ServicesComponent,
    ContactsComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
