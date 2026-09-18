import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6-tratamento-de-lista-vazia',
  standalone: false,
  templateUrl: './ex6-tratamento-de-lista-vazia.html',
  styleUrl: './ex6-tratamento-de-lista-vazia.scss',
})
export class Ex6TratamentoDeListaVazia {
  pessoasInicial = [
      { id: 1, nome: "Thiago" },
      { id: 2, nome: "Marco" },
      { id: 3, nome: "Sergio" },
      { id: 4, nome: "Carol" },
      { id: 5, nome: "Jessica"}
  ];

  pessoas = [...this.pessoasInicial]; // deixa imutavel

  removerUltimoNome() {
    this.pessoas.pop();
  }

  limparLista() {
    this.pessoas = [];
  }

  restaurarListaInicial() {
    this.pessoas = [...this.pessoasInicial];
  }
}
