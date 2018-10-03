import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';
import { DxChartModule, DxButtonModule } from 'devextreme-angular';

import { HttpModule } from '@angular/http';
import { PUBLIC_ROUTES } from './public/public.route';

import { PublicService } from './public/public.service';
import { ValidationService } from './services/validation.service';
import { ControlMessagesComponent } from './services/controlMessages.component';

import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { UsersComponent } from './public/users/users.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full', },
  { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES }
];

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    UsersComponent,
    ControlMessagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    ChartModule.forRoot(require('highcharts')),
    DxChartModule,
    DxButtonModule
  ],
  providers: [
    PublicService,
    ValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
