import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';

@Pipe({
  name: 'textoPorTipo'
})
export class TextoPorTipoPipe implements PipeTransform {

  transform(pokemon: Pokemon, ): string {
   const type = pokemon.types[0].type.name;

    const text: Record<string, string> = {
      normal: 'El tipo normal es el tipo más básico de todos. No es muy efectivo contra ningún tipo, pero tampoco es débil contra ninguno. ',
      fire: 'El tipo fuego es uno de los tipos más ofensivos. Es muy efectivo contra el tipo planta, hielo, bicho y acero, pero no es muy efectivo contra el tipo agua, dragón y fuego. ',
      water: 'El tipo agua es uno de los tipos más comunes. Es muy efectivo contra el tipo fuego, tierra y roca, pero no es muy efectivo contra el tipo agua, planta y dragón. ',
      electric: 'El tipo eléctrico es uno de los tipos más ofensivos. Es muy efectivo contra el tipo agua y volador, pero no es muy efectivo contra el tipo eléctrico, planta y dragón. ',
      grass: 'El tipo planta es uno de los tipos más defensivos. Es muy efectivo contra el tipo agua, tierra y roca, pero no es muy efectivo contra el tipo fuego, planta, veneno, volador, bicho y dragón. ',
      ice: 'El tipo hielo es uno de los tipos más defensivos. Es muy efectivo contra el tipo planta, tierra, volador y dragón, pero no es muy efectivo contra el tipo fuego, agua, hielo y acero. ',
      fighting: 'El tipo lucha es uno de los tipos más ofensivos. Es muy efectivo contra el tipo normal, hielo, roca, acero y siniestro, pero no es muy efectivo contra el tipo veneno, volador, psíquico, bicho, hada y fantasma. ',
      poison: 'El tipo veneno es uno de los tipos más defensivos. Es muy efectivo contra el tipo planta y hada, pero no es muy efectivo contra el tipo veneno, tierra, roca, fantasma y acero. ',
      ground: 'El tipo tierra es uno de los tipos más defensivos. Es muy efectivo contra el tipo fuego, eléctrico, veneno, roca y acero, pero no es muy efectivo contra el tipo planta, bicho y dragón. ',
      flying: 'El tipo volador es uno de los tipos más ofensivos. Es muy efectivo contra el tipo planta, lucha y bicho, pero no es muy efectivo contra el tipo eléctrico, roca y acero. ',
      psychic: 'El tipo psíquico es uno de los tipos más ofensivos. Es muy efectivo contra el tipo lucha y veneno, pero no es muy efectivo contra el tipo psíquico, acero y siniestro. ',
      bug: 'El tipo bicho es uno de los tipos más ofensivos. Es muy efectivo contra el tipo planta, psíquico y siniestro, pero no es muy efectivo contra el tipo fuego, lucha, veneno, volador, fantasma, acero y hada. ',
      rock: 'El tipo roca es uno de los tipos más defensivos. Es muy efectivo contra el tipo fuego, hielo, volador y bicho, pero no es muy efectivo contra el tipo lucha, tierra, acero y agua. ',
      ghost: 'El tipo fantasma es uno de los tipos más defensivos. Es muy efectivo contra el tipo psíquico y fantasma, pero no es muy efectivo contra el tipo oscuro y normal. ',
      dragon: 'El tipo dragón es uno de los tipos más ofensivos. Es muy efectivo contra el tipo dragón, pero no es muy efectivo contra el tipo acero. ',
      dark: 'El tipo siniestro es uno de los tipos más ofensivos. Es muy efectivo contra el tipo psíquico y fantasma, pero no es muy efectivo contra el tipo lucha, siniestro y hada. ',
      steel: 'El tipo acero es uno de los tipos más defensivos. Es muy efectivo contra el tipo hielo, roca y hada, pero no es muy efectivo contra el tipo fuego, agua, eléctrico y acero. ',
      fairy: 'El tipo hada es uno de los tipos más defensivos. Es muy efectivo contra el tipo lucha, dragón y siniestro, pero no es muy efectivo contra el tipo fuego, veneno y acero. ',

      
    };

    return text[type];
  }

}
