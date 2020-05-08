import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { ServicesComponent } from './public/services/services.component';
import { FaqComponent } from './public/faq/faq.component';
import { ContactsComponent } from './public/contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { CreateLoginComponent } from './login/create-login/create-login.component';
import { RestrictComponent } from './restrict/restrict.component';
import { ChartsTablesComponent } from './restrict/charts-tables/charts-tables.component';
import { ExpenseComponent } from './restrict/expense/expense.component';
import { RevenueComponent } from './restrict/revenue/revenue.component';
import { AddExpensesComponent } from './restrict/expense/add-expenses/add-expenses.component';
import { ListExpensesComponent } from './restrict/expense/list-expenses/list-expenses.component';
import { UpdateExpenseComponent } from './restrict/expense/update-expense/update-expense.component';
import { ViewExpenseComponent } from './restrict/expense/view-expense/view-expense.component';
import { AddFixedExpenseComponent } from './restrict/expense/add-expenses/add-fixed-expense/add-fixed-expense.component';
import { AddLongExpenseComponent } from './restrict/expense/add-expenses/add-long-expense/add-long-expense.component';
import { AddShortExpenseComponent } from './restrict/expense/add-expenses/add-short-expense/add-short-expense.component';
import { AddVariableExpenseComponent } from './restrict/expense/add-expenses/add-variable-expense/add-variable-expense.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: '', component: PublicComponent, children: [
     { path: 'principal', component: HomeComponent },
     { path: 'sobre', component: AboutComponent },
     { path: 'servicos', component: ServicesComponent },
     { path: 'faq', component: FaqComponent },
     { path: 'contactos', component: ContactsComponent }
   ] },
  { path: 'login', component: LoginComponent },
  { path: 'criar-conta', component: CreateLoginComponent },
  { path: 'restrito', component: RestrictComponent, children:[
     { path: 'charts-tabelas', component: ChartsTablesComponent },
     { path: 'despesas', component: ExpenseComponent, children:[
      { path: 'adicionar-despesa', component: AddExpensesComponent, children: [
        { path: 'fixa', component: AddFixedExpenseComponent },
        { path: 'longa', component: AddLongExpenseComponent },
        { path: 'curta', component: AddShortExpenseComponent },
        { path: 'variavel', component: AddVariableExpenseComponent },
      ] },
      { path: 'listar-despesa', component: ListExpensesComponent },
      { path: 'alterar-despesa', component: UpdateExpenseComponent },
      { path: 'ver-despesa', component: ViewExpenseComponent },
     ]},
     { path: 'receitas', component: RevenueComponent },    
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
