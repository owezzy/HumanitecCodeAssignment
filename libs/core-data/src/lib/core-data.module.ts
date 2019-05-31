import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from './notification/notification.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

@NgModule({
  providers: [
    AuthService,
    NotificationService,
    AuthGuardService,

  ],
  imports: [CommonModule, HttpClientModule]
})
export class CoreDataModule {}
