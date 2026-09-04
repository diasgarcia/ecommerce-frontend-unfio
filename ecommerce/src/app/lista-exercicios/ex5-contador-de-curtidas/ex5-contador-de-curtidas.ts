import { Component } from '@angular/core';

@Component({
  selector: 'app-ex5-contador-de-curtidas',
  standalone: false,
  templateUrl: './ex5-contador-de-curtidas.html',
  styleUrl: './ex5-contador-de-curtidas.scss',
})
export class Ex5ContadorDeCurtidas {
  curtidas = 0;

  aumentarCurtida() {
    this.curtidas++;
  }

  diminuirCurtida() {
    if (this.curtidas > 0) {
      this.curtidas--;
    }
  }
}
