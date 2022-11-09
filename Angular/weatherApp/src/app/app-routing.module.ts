import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './favourite/favourite.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { RecentSearchComponent } from './recent-search/recent-search.component';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'home', component:HomeComponent},
  {path:'favourite', component: FavouriteComponent},
  {path:'recentsearch', component: RecentSearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [
  MainComponent,
  HomeComponent,
  FavouriteComponent,
  RecentSearchComponent
]

