import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1ApresentacaoDoAluno } from './ex1-apresentacao-do-aluno/ex1-apresentacao-do-aluno';
import { Ex2CalculandoComInterpolation } from './ex2-calculando-com-interpolation/ex2-calculando-com-interpolation';
import { Ex3ImagemDinamica } from './ex3-imagem-dinamica/ex3-imagem-dinamica';
import { Ex4BotaoHabilitadoOuDesabilitado } from './ex4-botao-habilitado-ou-desabilitado/ex4-botao-habilitado-ou-desabilitado';

const routes: Routes = [
  {
    path: 'ex1-apresentacao-do-aluno',
    component: Ex1ApresentacaoDoAluno
  },
  {
    path: 'ex2-calculando-com-interpolation',
    component: Ex2CalculandoComInterpolation
  },
  {
    path: 'ex3-imagem-dinamica',
    component: Ex3ImagemDinamica
  },
  {
    path: 'ex4-botao-habilitado-ou-desabilitado',
    component: Ex4BotaoHabilitadoOuDesabilitado
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExerciciosRoutingModule {}
