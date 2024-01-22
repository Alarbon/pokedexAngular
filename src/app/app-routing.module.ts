import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { esperaGuard } from './pokedex/guards/espera.guard';
import { ErrorComponent } from './shared/components/error/error.component';

const routes: Routes = [
  {
    path: 'pokedex',
    loadChildren: () =>
      import('./pokedex/pokedex.module').then((m) => m.PokedexModule),
      canActivate:[esperaGuard],
    },
  
    {
      path:'error',
      component: ErrorComponent,
    },
  {
    path: '**',
    redirectTo: 'pokedex',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
