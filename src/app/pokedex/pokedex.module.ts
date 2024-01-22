import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { ListPokemonComponent } from './pages/list-pokemon/list-pokemon.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorTipoPokemonPipe } from './pipes/color-tipo-pokemon.pipe';
import { TextoPorTipoPipe } from './pipes/texto-por-tipo.pipe';
import { HabilidadComponent } from './pages/habilidad/habilidad.component';

@NgModule({
  declarations: [ListPokemonComponent, PokemonComponent, CardPokemonComponent, ColorTipoPokemonPipe, TextoPorTipoPipe, HabilidadComponent],
  imports: [CommonModule, PokedexRoutingModule, HttpClientModule],
})
export class PokedexModule {}
