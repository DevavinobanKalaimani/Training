import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { FilmsComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'films', component: FilmsComponent },
  {path: 'species', component: SpeciesComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'starships', component: StarshipsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
