import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDataComponent } from 'app/user-data/user-data.component';
import { UserListComponent } from 'app/user-list/user-list.component';
import { UserDetailComponent } from "app/user-detail/user-detail.component";

// defining routes
const routes: Routes = [
  { path: 'user', component: UserDataComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'userDetail/:id', component: UserDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: '/user' },
  { path: '**', component: UserDataComponent }
];

export const routedComponents = RouterModule.forRoot(routes)