import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from '../../interfaces/habilidad';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrl: './habilidad.component.css',
})
export class HabilidadComponent {
  habilidad?: Habilidad;
  pokemons: Pokemon[] = [];

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

        this.pokemonService.getHabilidad(id).subscribe((habilidad) => {
          this.habilidad = habilidad;
     
          habilidad.pokemon.forEach((pokemon) => {
            this.pokemonService.getPokemon(pokemon.pokemon.url).subscribe((pokemon) => {
              this.pokemons.push(pokemon);
            });
          });
          
        });
      } catch (error) {
        this.router.navigate(['/error']);
        return;
      }
    });
  }
}
