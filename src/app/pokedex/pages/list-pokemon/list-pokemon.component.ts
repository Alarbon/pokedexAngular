import { Component, ElementRef, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css',
})
export class ListPokemonComponent implements OnInit {
  pokemons: Pokemon[] = [];
  page: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getFirstPokemons().subscribe((pokedex) => {
      this.page = pokedex.next!;

      pokedex.results.forEach((pokemon) => {
        this.pokemonService.getPokemon(pokemon.url).subscribe((pokemon) => {
          this.pokemons.push(pokemon);
        });
      });
    });
  }

  nextPage() {
    this.pokemonService.getNextPokemons(this.page).subscribe((pokedex) => {
      this.page = pokedex.next!;
      pokedex.results.forEach((pokemon) => {
        this.pokemonService.getPokemon(pokemon.url).subscribe((pokemon) => {
          this.pokemons.push(pokemon);
        });
      });
    });
  }
}
