import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PokecardComponent } from './components/pokecard/pokecard.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokeportadaComponent } from './components/pokeportada/pokeportada.component';

const routes: Routes = [
  {
    path:'',
    component:PokeportadaComponent
  },
  {
    path:'pokemones',
    component:PokemonComponent
  },
  {
    path:'allcards',
    component:PokecardComponent
  },
  {
    path:'home',
    component:PokeportadaComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
