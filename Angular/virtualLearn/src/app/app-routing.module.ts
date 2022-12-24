import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {path: '', component: LogInComponent},
  {path: 'login', component: LogInComponent},
  {path: 'home', component: HomeComponent},
  {path: 'overview', component:OverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
