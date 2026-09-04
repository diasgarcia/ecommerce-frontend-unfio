import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1ApresentacaoDoAluno } from './ex1-apresentacao-do-aluno/ex1-apresentacao-do-aluno';
import { Ex2CalculandoComInterpolation } from './ex2-calculando-com-interpolation/ex2-calculando-com-interpolation';

const routes: Routes = [
  {
    path: 'ex1-apresentacao-do-aluno',
    component: Ex1ApresentacaoDoAluno
  },
  {
    path: 'ex2-calculando-com-interpolation',
    component: Ex2CalculandoComInterpolation
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExerciciosRoutingModule {}
