import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavComponent } from './fav/fav.component';
import { HomeComponent } from './header/home.component';
import { MainComponent } from './main/main.component';
import { ResentComponent } from './resent/resent.component';

const routes: Routes = [
  {path: '', component:MainComponent},
  {path: 'main', component: MainComponent},
  {path:'fav', component:FavComponent},
  {path:'recent',component:ResentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing =[HomeComponent, MainComponent, FavComponent,ResentComponent]
