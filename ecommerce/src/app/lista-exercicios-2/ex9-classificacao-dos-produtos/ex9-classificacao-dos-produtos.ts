import { Component } from '@angular/core';

export interface Produto {
  id: number,
  nome: string,
  preco: number,
  quantidade: number
}

@Component({
  selector: 'app-ex9-classificacao-dos-produtos',
  standalone: false,
  templateUrl: './ex9-classificacao-dos-produtos.html',
  styleUrl: './ex9-classificacao-dos-produtos.scss',
})
export class Ex9ClassificacaoDosProdutos {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado mecânico', preco: 299.9, quantidade: 0 },
    { id: 2, nome: 'Mouse gamer', preco: 149.5, quantidade: 25 },
    { id: 3, nome: 'Monitor 24"', preco: 899.0, quantidade: 8 },
    { id: 4, nome: 'Headset', preco: 199.99, quantidade: 15 },
    { id: 5, nome: 'Cadeira gamer', preco: 1299.9, quantidade: 5 },
  ];
}
