import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { TransctionDetailsComponent } from './transction-details/transction-details.component';
import { HomeComponent } from './home/home.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app-routing.module';

import {GpDynamicFormModule} from 'gp-dynamic-form';

@NgModule({
  declarations: [
    AppComponent,
    TransctionDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GpDynamicFormModule
  ],
  providers: [
    provideRouter(routes,withComponentInputBinding())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
