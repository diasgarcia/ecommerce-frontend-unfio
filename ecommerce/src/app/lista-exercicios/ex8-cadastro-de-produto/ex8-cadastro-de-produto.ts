import { Component } from '@angular/core';

@Component({
  selector: 'app-ex8-cadastro-de-produto',
  standalone: false,
  templateUrl: './ex8-cadastro-de-produto.html',
  styleUrl: './ex8-cadastro-de-produto.scss',
})
export class Ex8CadastroDeProduto {
  produto = 'Mouse Gamer';
  preco = 150;
  quantidade = 2;
}
