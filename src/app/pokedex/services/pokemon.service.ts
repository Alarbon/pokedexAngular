import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';
import { Pokedex } from '../interfaces/pokedex';
import { Observable } from 'rxjs';
import { Habilidad } from '../interfaces/habilidad';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  url: string = 'https://pokeapi.co/api/v2/pokemon';
  urlHabilidad: string = 'https://pokeapi.co/api/v2/ability';

  pokemons: Pokemon[] = [];

  constructor(private http: HttpClient) {}

  getFirstPokemons(): Observable<Pokedex> {
    return this.http.get<Pokedex>(this.url);
  }

  getNextPokemons(url: string): Observable<Pokedex> {
    return this.http.get<Pokedex>(url);
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }
  getPokemonById(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.url}/${id}`);
  }

  getHabilidad(id: string): Observable<Habilidad> {
    return this.http.get<Habilidad>(`${this.urlHabilidad}/${id}`);
  }
}
