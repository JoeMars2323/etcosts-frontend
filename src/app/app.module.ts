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

import { RestApiService } from './shared/rest-api-service/rest-api.service';
import { WindowsChangeService } from './shared/windows-change-service/windows-change.service';
import { AuthenticationService } from './shared/authentication-service/authentication.service';

import { AppComponent } from './app.component';

import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { ServicesComponent } from './public/services/services.component';
import { FaqComponent } from './public/faq/faq.component';
import { ContactsComponent } from './public/contacts/contacts.component';
import { AboutComponent } from './public/about/about.component';

import { LoginComponent } from './login/login.component';
import { CreateLoginComponent } from './login/create-login/create-login.component';

import { RestrictComponent } from './restrict/restrict.component';
import { OverallComponent } from './restrict/charts/overall.component';
import { ListExpensesComponent } from './restrict/expense/list-expenses/list-expenses.component';
import { AddFixedExpenseComponent } from './restrict/expense/add-expenses/add-fixed-expense/add-fixed-expense.component';
import { AddVariableExpenseComponent } from './restrict/expense/add-expenses/add-variable-expense/add-variable-expense.component';
import { AddShortExpenseComponent } from './restrict/expense/add-expenses/add-short-expense/add-short-expense.component';
import { AddLongExpenseComponent } from './restrict/expense/add-expenses/add-long-expense/add-long-expense.component';
import { UpdateExpenseComponent } from './restrict/expense/update-expense/update-expense.component';
import { UpdateLongExpenseComponent } from './restrict/expense/update-expense/update-long-expense/update-long-expense.component';
import { UpdateShortExpenseComponent } from './restrict/expense/update-expense/update-short-expense/update-short-expense.component';
import { UpdateVariableExpenseComponent } from './restrict/expense/update-expense/update-variable-expense/update-variable-expense.component';
import { UpdateFixedExpenseComponent } from './restrict/expense/update-expense/update-fixed-expense/update-fixed-expense.component';
import { ViewExpenseComponent } from './restrict/expense/view-expense/view-expense.component';
import { ViewFixedExpenseComponent } from './restrict/expense/view-expense/view-fixed-expense/view-fixed-expense.component';
import { ViewLongExpenseComponent } from './restrict/expense/view-expense/view-long-expense/view-long-expense.component';
import { ViewShortExpenseComponent } from './restrict/expense/view-expense/view-short-expense/view-short-expense.component';
import { ViewVariableExpenseComponent } from './restrict/expense/view-expense/view-variable-expense/view-variable-expense.component';
import { RevenueComponent } from './restrict/revenue/revenue.component';
import { ExpenseComponent } from './restrict/expense/expense.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactsComponent,
    FaqComponent,    
    LoginComponent,
    CreateLoginComponent,
    ListExpensesComponent,
    UpdateExpenseComponent,
    AddFixedExpenseComponent,
    AddVariableExpenseComponent,
    AddShortExpenseComponent,
    AddLongExpenseComponent,
    UpdateLongExpenseComponent,
    UpdateShortExpenseComponent,
    UpdateVariableExpenseComponent,
    UpdateFixedExpenseComponent,
    ViewExpenseComponent,
    ViewFixedExpenseComponent,
    ViewLongExpenseComponent,
    ViewShortExpenseComponent,
    ViewVariableExpenseComponent,
    RevenueComponent,
    ExpenseComponent,
    OverallComponent,
    RestrictComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ChartsModule
  ],
  providers: [
    AuthenticationService,
    RestApiService,
    WindowsChangeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
