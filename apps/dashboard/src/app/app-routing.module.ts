import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@humanitec/ui-login';

const routes: Routes = [
  {path: '', redirectTo: 'programs', pathMatch: 'full'},
  {path: 'programs', loadChildren: './programs/programs.module#ProgramsModule'},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
