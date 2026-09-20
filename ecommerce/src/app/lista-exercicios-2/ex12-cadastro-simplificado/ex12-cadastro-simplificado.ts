import { Component } from '@angular/core';

export interface ProdutoCadastro {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-ex12-cadastro-simplificado',
  standalone: false,
  templateUrl: './ex12-cadastro-simplificado.html',
  styleUrl: './ex12-cadastro-simplificado.scss',
})
export class Ex12CadastroSimplificado {
  nome = '';
  quantidade: number | null = null;

  mensagemErro = '';

  produtos: ProdutoCadastro[] = [
    { id: 1, nome: 'Teclado mecânico', quantidade: 10 },
    { id: 2, nome: 'Mouse gamer', quantidade: 25 },
  ];

  private proximoId = 3;

  cadastrar(): void {
    if (!this.nome || this.nome.trim() === '') {
      this.mensagemErro = 'Informe o nome do produto.';
      return;
    }

    if (
      this.quantidade === null ||
      this.quantidade === undefined ||
      isNaN(Number(this.quantidade)) ||
      Number(this.quantidade) < 0
    ) {
      this.mensagemErro = 'Informe uma quantidade igual ou maior que zero.';
      return;
    }

    this.mensagemErro = '';

    this.produtos.push({
      id: this.proximoId++,
      nome: this.nome.trim(),
      quantidade: Number(this.quantidade),
    });

    this.nome = '';
    this.quantidade = null;
  }

  excluir(id: number): void {
    this.produtos = this.produtos.filter((p) => p.id !== id);
  }
}
