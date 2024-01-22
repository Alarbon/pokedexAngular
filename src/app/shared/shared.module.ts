import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]

})
export class SharedModule { }
