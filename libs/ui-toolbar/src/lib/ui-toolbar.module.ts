import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '@humanitec/ui-toolbar';
import { MaterialModule } from '@humanitec/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ToolbarComponent],
  exports: [
    ToolbarComponent
  ]
})
export class UiToolbarModule {}
