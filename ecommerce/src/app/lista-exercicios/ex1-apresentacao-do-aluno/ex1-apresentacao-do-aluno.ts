import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1-apresentacao-do-aluno',
  standalone: false,
  templateUrl: './ex1-apresentacao-do-aluno.html',
  styleUrl: './ex1-apresentacao-do-aluno.scss',
})
export class Ex1ApresentacaoDoAluno {
  nome = 'Carlos';
  idade = 25;
  curso = 'Sistemas daInformação'
}
