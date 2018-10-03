import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

export const PUBLIC_ROUTES: Routes = [
    {
        path: 'users',
        component: UsersComponent
    }, 
];

