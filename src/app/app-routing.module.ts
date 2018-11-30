import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './user/auth-guard.service';

import { ShellComponent } from './home/shell.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found.component';
import {LoginComponent} from './user/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'programs',
        // canActivate: [AuthGuard],
        loadChildren: './programs/program.module#ProgramModule'
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
