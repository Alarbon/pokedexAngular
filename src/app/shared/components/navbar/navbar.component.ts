import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private router: Router) {}
  pokemonAleatorio() {
    this.router.navigate(['/pokedex/pokemon/', this.idAleatorio()]);
  }

  idAleatorio(): number {
    return Math.round(Math.random() * 1010);
  }
}
