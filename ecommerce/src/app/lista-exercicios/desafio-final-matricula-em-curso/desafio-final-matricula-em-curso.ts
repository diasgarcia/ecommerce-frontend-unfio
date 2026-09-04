import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio-final-matricula-em-curso',
  standalone: false,
  templateUrl: './desafio-final-matricula-em-curso.html',
  styleUrl: './desafio-final-matricula-em-curso.scss',
})
export class DesafioFinalMatriculaEmCurso {
  nomeAluno = '';
  quantidadeDisciplinas = 1;
  mensagem = '';

  get botaoMatriculaValido(): boolean {
    return this.nomeAluno.trim() !== '';
  }

  aumentarQuantidade() {
    this.quantidadeDisciplinas++;
  }

  diminuirQuantidade() {
    if (this.quantidadeDisciplinas > 1) {
      this.quantidadeDisciplinas--;
    }
  }

  realizarMatricula() {
    this.mensagem = `${this.nomeAluno} foi matriculado(a) em ${this.quantidadeDisciplinas} disciplina(s).`;
  }
}
