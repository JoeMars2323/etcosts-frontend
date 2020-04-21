import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicMainComponent } from './modules/public/public-main/public-main.component';
import { HomeComponent } from './modules/public/home/home.component';
import { ServicesComponent } from './modules/public//services/services.component';
import { FaqComponent } from './modules/public/faq/faq.component';
import { ContactsComponent } from './modules/public/contacts/contacts.component';
import { AboutComponent } from './modules/public/about/about.component';
import { LoginComponent } from './modules/login/do-login/login.component';
import { CreateLoginComponent } from './modules/login/create-login/create-login.component';
import { PersonalMainComponent } from './modules/restrict/personal-main/personal-main.component';
import { AddExpenseComponent } from './modules/restrict/add-expense/add-expense.component';
import { ListExpensesComponent } from './modules/restrict/list-expenses/list-expenses.component';
import { OverallComponent } from './modules/restrict/overall/overall.component';
import { AuthenticationService } from './core/services/authentication/authentication.service';
import { UpdateExpenseComponent } from './modules/restrict/update-expense/update-expense.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateLoginComponent,
    AboutComponent,
    ServicesComponent,
    ContactsComponent,
    FaqComponent,
    PersonalMainComponent,
    AddExpenseComponent,
    ListExpensesComponent,
    OverallComponent,
    PublicMainComponent,
    HomeComponent,
    UpdateExpenseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
