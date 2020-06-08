import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { ServicesComponent } from './public/services/services.component';
import { FaqComponent } from './public/faq/faq.component';
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
import { UpdateFixedExpenseComponent } from './restrict/expense/update-expense/update-fixed-expense/update-fixed-expense.component';
import { UpdateLongExpenseComponent } from './restrict/expense/update-expense/update-long-expense/update-long-expense.component';
import { UpdateShortExpenseComponent } from './restrict/expense/update-expense/update-short-expense/update-short-expense.component';
import { UpdateVariableExpenseComponent } from './restrict/expense/update-expense/update-variable-expense/update-variable-expense.component';
import { ListByStateComponent } from './restrict/expense/list-expenses/list-by-state/list-by-state.component';
import { ListByTypesComponent } from './restrict/expense/list-expenses/list-by-types/list-by-types.component';
import { ListByYearComponent } from './restrict/expense/list-expenses/list-by-year/list-by-year.component';
import { ListStandardComponent } from './restrict/expense/list-expenses/list-standard/list-standard.component';
import { ViewVariableExpenseComponent } from './restrict/expense/view-expense/view-variable-expense/view-variable-expense.component';
import { ViewShortExpenseComponent } from './restrict/expense/view-expense/view-short-expense/view-short-expense.component';
import { ViewLongExpenseComponent } from './restrict/expense/view-expense/view-long-expense/view-long-expense.component';
import { ViewFixedExpenseComponent } from './restrict/expense/view-expense/view-fixed-expense/view-fixed-expense.component';
import { ForgotComponent } from './login/forgot/forgot.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: '', component: PublicComponent, children: [
     { path: 'principal', component: HomeComponent },
     { path: 'sobre', component: AboutComponent },
     { path: 'servicos', component: ServicesComponent },
     { path: 'faq', component: FaqComponent }
   ] },
  { path: 'login', component: LoginComponent },
  { path: 'criar-conta', component: CreateLoginComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'restrito', component: RestrictComponent, children:[
     { path: '', component: ChartsTablesComponent },
     { path: 'despesas', component: ExpenseComponent, children:[
      { path: 'adicionar-despesa', component: AddExpensesComponent, children: [
        { path: 'fixa', component: AddFixedExpenseComponent },
        { path: 'longa', component: AddLongExpenseComponent },
        { path: 'curta', component: AddShortExpenseComponent },
        { path: 'variavel', component: AddVariableExpenseComponent },
      ] },
      { path: 'listar-despesa', component: ListExpensesComponent, children: [
        { path: 'por-estado', component: ListByStateComponent },
        { path: 'por-tipo', component: ListByTypesComponent },
        { path: 'por-ano', component: ListByYearComponent },
        { path: 'geral', component: ListStandardComponent },
      ]},
      { path: 'alterar-despesa', component: UpdateExpenseComponent, children: [
        { path: 'fixa/:id', component: UpdateFixedExpenseComponent },
        { path: 'longa/:id', component: UpdateLongExpenseComponent },
        { path: 'curta/:id', component: UpdateShortExpenseComponent },
        { path: 'variavel/:id', component: UpdateVariableExpenseComponent },
      ] },
      { path: 'ver-despesa', component: ViewExpenseComponent, children:[
        { path: 'fixa/:id', component: ViewFixedExpenseComponent },
        { path: 'longa/:id', component: ViewLongExpenseComponent },
        { path: 'curta/:id', component: ViewShortExpenseComponent },
        { path: 'variavel/:id', component: ViewVariableExpenseComponent },
      ]},
     ]},
     { path: 'receitas', component: RevenueComponent },    
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
