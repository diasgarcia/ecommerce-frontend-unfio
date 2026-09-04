import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10-login-simulado',
  standalone: false,
  templateUrl: './ex10-login-simulado.html',
  styleUrl: './ex10-login-simulado.scss',
})
export class Ex10LoginSimulado {
  usuario = 'Rafael';
  senha = '123';
  boasVindas = '';

  get botaoEntrarValido(): boolean {
    return this.usuario.trim() !== '' && this.senha.trim() !== '';
  }

  mostrarBoasVindas() {
    this.boasVindas = `Boas vindas, ${this.usuario}!`;
  }

  clickEntrar() {
    this.mostrarBoasVindas();
    this.usuario = '';
    this.senha = '';
  }
}
