import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3-verificacao-de-idade',
  standalone: false,
  templateUrl: './ex3-verificacao-de-idade.html',
  styleUrl: './ex3-verificacao-de-idade.scss',
})
export class Ex3VerificacaoDeIdade {
  idade: number = 0;

  aumentarIdade() {
    this.idade++;
  }

  diminuirIdade() {
    if (this.idade > 0) {
      this.idade--;
    }
  }
}
