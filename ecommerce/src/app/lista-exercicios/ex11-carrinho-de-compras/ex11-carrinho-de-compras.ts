import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11-carrinho-de-compras',
  standalone: false,
  templateUrl: './ex11-carrinho-de-compras.html',
  styleUrl: './ex11-carrinho-de-compras.scss',
})
export class Ex11CarrinhoDeCompras {
  produto = 'Mouse Gamer';
  preco = 120;
  quantidade = 1;
  mensagem = '';

  get total(): number {
    return this.preco * this.quantidade;
  }

  aumentarQuantidade() {
    this.quantidade++;
  }

  diminuirQuantidade() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarCarrinho() {
    this.mensagem = `${this.quantidade} unidade(s) de ${this.produto} adicionada(s) ao carrinho!`;
  }
}
