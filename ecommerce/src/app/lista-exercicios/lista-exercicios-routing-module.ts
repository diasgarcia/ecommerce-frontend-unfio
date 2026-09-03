import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1ApresentacaoDoAluno } from './ex1-apresentacao-do-aluno/ex1-apresentacao-do-aluno';

const routes: Routes = [
  {
    path: 'ex1-apresentacao-do-aluno',
    component: Ex1ApresentacaoDoAluno
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExerciciosRoutingModule {}
