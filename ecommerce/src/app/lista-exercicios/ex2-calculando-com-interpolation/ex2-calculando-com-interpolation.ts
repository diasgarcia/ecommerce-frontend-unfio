import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2-calculando-com-interpolation',
  standalone: false,
  templateUrl: './ex2-calculando-com-interpolation.html',
  styleUrl: './ex2-calculando-com-interpolation.scss',
})
export class Ex2CalculandoComInterpolation {
  produto = 'Teclado';
  preco = 150;
  quantidade = 3;
}
