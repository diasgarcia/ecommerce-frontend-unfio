import { Component } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-ex10-promocao-e-estilo-dinamico',
  standalone: false,
  templateUrl: './ex10-promocao-e-estilo-dinamico.html',
  styleUrl: './ex10-promocao-e-estilo-dinamico.scss',
})
export class Ex10PromocaoEEstiloDinamico {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado mecânico', preco: 299.9, quantidade: 10, promocao: true },
    { id: 2, nome: 'Mouse gamer', preco: 149.5, quantidade: 25, promocao: false },
    { id: 3, nome: 'Monitor 24"', preco: 899.0, quantidade: 8, promocao: false },
    { id: 4, nome: 'Headset', preco: 199.99, quantidade: 15, promocao: true },
    { id: 5, nome: 'Cadeira gamer', preco: 1299.9, quantidade: 5, promocao: false },
  ];

  togglePromocao(p: Produto) {
    p.promocao = !p.promocao;
  }
}
