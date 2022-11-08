import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckComponent } from './check/check.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { LoginComponent } from './login/login.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'checkemail', component: CheckComponent},
  {path: 'home', component: HomescreenComponent},
  {path: 'update', component: UpdatepasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=
[
  LoginComponent,
  CheckComponent, 
  HomescreenComponent,
  UpdatepasswordComponent,
  SuperadminComponent,
  AdminComponent
]
