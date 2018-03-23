import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Login1Component } from './login1/login1.component';
import { Register1Component } from './register1/register1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserListComponent } from './user-list/user-list.component';




const routes: Routes = [
{ path: '', redirectTo: '/login1', pathMatch: 'full'},
{ path: 'login1', component: Login1Component},
{ path: 'register1', component: Register1Component},
{ path: 'register1/:id', component: Register1Component},
{ path: 'user', component: UserListComponent},
{ path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]   
})
export class AppRoutingModule { }
export const routingComponents = [Login1Component, Register1Component,
                                  UserListComponent, PageNotFoundComponent]//, PageNotFoundComponent] 
