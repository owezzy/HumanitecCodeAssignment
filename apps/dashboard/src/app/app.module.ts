import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@humanitec/material';
import { CoreDataModule } from '@humanitec/core-data';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  UiToolbarModule } from '@humanitec/ui-toolbar';
import { UiLoginModule } from '@humanitec/ui-login';
import { LayoutModule } from '@angular/cdk/layout';
import { ProgramsModule } from './programs/programs.module';
import { ProgramsStateModule } from '@humanitec/programs';


@NgModule({
  declarations: [AppComponent ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    CoreDataModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    UiToolbarModule,
    UiLoginModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
