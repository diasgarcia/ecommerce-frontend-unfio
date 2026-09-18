import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2-situacao-do-usuario',
  standalone: false,
  templateUrl: './ex2-situacao-do-usuario.html',
  styleUrl: './ex2-situacao-do-usuario.scss',
})
export class Ex2SituacaoDoUsuario {
  usuarioLogado = false;

  alterarUsuarioLogado() {
    this.usuarioLogado = !this.usuarioLogado
  }
}
