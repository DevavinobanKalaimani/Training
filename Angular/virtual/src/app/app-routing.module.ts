import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOngoingComponent } from './all-ongoing/all-ongoing.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { ModuleTestComponent } from './module-test/module-test.component';
import { OverviewComponent } from './overview/overview.component';
import { SeeAllComponent } from './see-all/see-all.component';

const routes: Routes = [
  {path: '', component: LogInComponent},
  {path: 'login', component: LogInComponent},
  {path: 'home', component: HomeComponent},
  {path: 'overview', component:OverviewComponent},
  {path: 'seeAll', component:SeeAllComponent},
  {path: 'test', component:ModuleTestComponent},
  {path: 'ongoing', component:AllOngoingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
