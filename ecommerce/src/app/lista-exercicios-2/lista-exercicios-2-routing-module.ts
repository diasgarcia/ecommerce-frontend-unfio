import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1ExibicaoDeMensagem } from './ex1-exibicao-de-mensagem/ex1-exibicao-de-mensagem';
import { Ex2SituacaoDoUsuario } from './ex2-situacao-do-usuario/ex2-situacao-do-usuario';

const routes: Routes = [
  {
      path: 'ex1',
      component: Ex1ExibicaoDeMensagem,
    },
    {
      path: 'ex2',
      component: Ex2SituacaoDoUsuario,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicios2RoutingModule {}
