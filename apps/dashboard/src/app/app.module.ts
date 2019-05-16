import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgramsModule } from './programs/programs.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@humanitec/material';
import { CoreDataModule } from '@humanitec/core-data';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  UiToolbarModule } from '@humanitec/ui-toolbar';
import { UiLoginModule } from '@humanitec/ui-login';


@NgModule({
  declarations: [AppComponent,  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    ProgramsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    UiToolbarModule,
    UiLoginModule,
    CoreDataModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
