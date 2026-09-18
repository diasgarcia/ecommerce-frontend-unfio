import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4-situacao-do-estoque',
  standalone: false,
  templateUrl: './ex4-situacao-do-estoque.html',
  styleUrl: './ex4-situacao-do-estoque.scss',
})
export class Ex4SituacaoDoEstoque {
  nomeProduto = 'Teclado';
  quantidadeEstoque = 5;
  
  get botaoRemoverValido(): boolean {
    return this.quantidadeEstoque === 0;
  }

  adicionarUnidade() {
    this.quantidadeEstoque++;
  }

  removerUnidade() {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--;
    }
  }
}
