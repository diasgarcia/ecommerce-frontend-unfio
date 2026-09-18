import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1ExibicaoDeMensagem } from './ex1-exibicao-de-mensagem/ex1-exibicao-de-mensagem';
import { Ex2SituacaoDoUsuario } from './ex2-situacao-do-usuario/ex2-situacao-do-usuario';
import { Ex3VerificacaoDeIdade } from './ex3-verificacao-de-idade/ex3-verificacao-de-idade';
import { Ex4SituacaoDoEstoque } from './ex4-situacao-do-estoque/ex4-situacao-do-estoque';

const routes: Routes = [
  {
      path: 'ex1',
      component: Ex1ExibicaoDeMensagem,
    },
    {
      path: 'ex2',
      component: Ex2SituacaoDoUsuario,
    },
    {
      path: 'ex3',
      component: Ex3VerificacaoDeIdade,
    },
    {
      path: 'ex4',
      component: Ex4SituacaoDoEstoque,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicios2RoutingModule {}
