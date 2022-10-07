import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamIdComponent } from './team-id/team-id.component';
import { TeamListComponent } from './team-list/team-list.component';


const routes: Routes = [  
  {path: 'details', component:TeamDetailsComponent},
  {path: 'team', component:TeamListComponent},
  {path: 'team/:id', component: TeamIdComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [TeamListComponent, TeamDetailsComponent, TeamIdComponent]
