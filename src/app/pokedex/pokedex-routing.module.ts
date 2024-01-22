import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './pages/list-pokemon/list-pokemon.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListPokemonComponent,
      },
      {
        path: 'pokemon/:id',
        component: PokemonComponent,
      },

      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokedexRoutingModule {}
