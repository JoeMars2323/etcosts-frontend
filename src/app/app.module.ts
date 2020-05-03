import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';

import { RestApiService } from './core/services/rest-api/rest-api.service';
import { WindowsChangeService } from './core/services/windows-change/windows-change.service';
import { AuthenticationService } from './core/services/authentication/authentication.service';


import { AppComponent } from './app.component';
import { PublicComponent } from './modules/public/public.component';
import { PersonalComponent } from './modules/personal/personal.component';
import { LoginComponent } from './modules/login/do-login/login.component';
import { CreateLoginComponent } from './modules/login/create-login/create-login.component';
import { HomeComponent } from './modules/public/home/home.component';
import { ServicesComponent } from './modules/public/services/services.component';
import { FaqComponent } from './modules/public/faq/faq.component';
import { ContactsComponent } from './modules/public/contacts/contacts.component';
import { AboutComponent } from './modules/public/about/about.component';
import { ListExpensesComponent } from './modules/personal/expense/list-expenses/list-expenses.component';
import { OverallComponent } from './modules/personal/overall/overall.component';
import { AddFixedExpenseComponent } from './modules/personal/expense/add-expenses/add-fixed-expense/add-fixed-expense.component';
import { AddVariableExpenseComponent } from './modules/personal/expense/add-expenses/add-variable-expense/add-variable-expense.component';
import { AddShortExpenseComponent } from './modules/personal/expense/add-expenses/add-short-expense/add-short-expense.component';
import { AddLongExpenseComponent } from './modules/personal/expense/add-expenses/add-long-expense/add-long-expense.component';
import { UpdateExpenseComponent } from './modules/personal/expense/update-expense/update-expense.component';
import { UpdateLongExpenseComponent } from './modules/personal/expense/update-expense/update-long-expense/update-long-expense.component';
import { UpdateShortExpenseComponent } from './modules/personal/expense/update-expense/update-short-expense/update-short-expense.component';
import { UpdateVariableExpenseComponent } from './modules/personal/expense/update-expense/update-variable-expense/update-variable-expense.component';
import { UpdateFixedExpenseComponent } from './modules/personal/expense/update-expense/update-fixed-expense/update-fixed-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PersonalComponent,
    LoginComponent,
    CreateLoginComponent,
    AboutComponent,
    ServicesComponent,
    ContactsComponent,
    FaqComponent,
    ListExpensesComponent,
    OverallComponent,
    HomeComponent,
    UpdateExpenseComponent,
    AddFixedExpenseComponent,
    AddVariableExpenseComponent,
    AddShortExpenseComponent,
    AddLongExpenseComponent,
    UpdateLongExpenseComponent,
    UpdateShortExpenseComponent,
    UpdateVariableExpenseComponent,
    UpdateFixedExpenseComponent
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
    ChartsModule
  ],
  providers: [AuthenticationService,
              RestApiService,
              WindowsChangeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
