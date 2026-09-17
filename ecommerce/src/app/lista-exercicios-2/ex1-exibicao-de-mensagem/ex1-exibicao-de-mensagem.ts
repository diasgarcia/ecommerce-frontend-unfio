import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1-exibicao-de-mensagem',
  standalone: false,
  templateUrl: './ex1-exibicao-de-mensagem.html',
  styleUrl: './ex1-exibicao-de-mensagem.scss',
})
export class Ex1ExibicaoDeMensagem {
  mensagemVisivel = false;

  alterarMesagemVisivel() {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}
