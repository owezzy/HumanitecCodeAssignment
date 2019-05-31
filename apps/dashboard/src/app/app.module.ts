import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NxModule } from '@nrwl/nx';

import { MaterialModule } from '@humanitec/material';
import { CoreDataModule } from '@humanitec/core-data';
import { ProgramsStateModule } from '@humanitec/programs';
import { UiToolbarModule } from '@humanitec/ui-toolbar';
import { UiLoginModule } from '@humanitec/ui-login';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgramsModule } from './programs/programs.module';
import { ActivitiesStateModule } from '@humanitec/activities';


@NgModule({
  declarations: [AppComponent],
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
    ProgramsStateModule,
   // ActivitiesStateModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
