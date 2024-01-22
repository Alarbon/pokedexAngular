import { Pokemon } from '../../interfaces/pokemon';
import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrl: './card-pokemon.component.css',
})
export class CardPokemonComponent {

  @Input() pokemon?: Pokemon;

  constructor() {
   
  }
}
