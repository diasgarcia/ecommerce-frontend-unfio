import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9-controle-estoque',
  standalone: false,
  templateUrl: './ex9-controle-estoque.html',
  styleUrl: './ex9-controle-estoque.scss',
})
export class Ex9ControleEstoque {
  produto = '';
  quantidade = 0;

  get botaoAdicionarValido(): boolean {
    return this.quantidade >= 0;
  }

  get botaoDiminuirValido(): boolean {
    return this.quantidade > 0;
  }

  aumentarEstoque() {
    this.quantidade++;
  }

  diminuirEstoque() {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }
}
