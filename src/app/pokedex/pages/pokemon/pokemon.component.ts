import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {
  pokemon?: Pokemon;

  //viene por id
  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(({ id }) => {
      try {
        //cnvertir a numero
        id = parseInt(id);

        if (isNaN(id)) {
          this.router.navigate(['/error']);
          return;
        }

        if (id < 1 || id > 1010) {
          this.router.navigate(['/error']);
          return;
        }

        this.pokemonService.getPokemonById(id).subscribe((pokemon) => {
          this.pokemon = pokemon;
        });
      } catch (error) {
        this.router.navigate(['/error']);
        return;
      }
    });
  }

  getPokemon(id: number) {
    this.router.navigate(['/pokedex/pokemon/', id]);
  }
}
