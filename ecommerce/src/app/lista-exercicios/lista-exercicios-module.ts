import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaExerciciosRoutingModule } from './lista-exercicios-routing-module';
import { Ex1ApresentacaoDoAluno } from './ex1-apresentacao-do-aluno/ex1-apresentacao-do-aluno';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Ex1ApresentacaoDoAluno],
  imports: [CommonModule, FormsModule, ListaExerciciosRoutingModule],
})
export class ListaExerciciosModule {}
