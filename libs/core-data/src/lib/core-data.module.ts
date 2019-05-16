import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  providers: [
    AuthService
  ],
  imports: [CommonModule, HttpClientModule]
})
export class CoreDataModule {}
