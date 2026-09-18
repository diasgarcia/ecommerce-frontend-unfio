import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1ExibicaoDeMensagem } from './ex1-exibicao-de-mensagem/ex1-exibicao-de-mensagem';
import { Ex2SituacaoDoUsuario } from './ex2-situacao-do-usuario/ex2-situacao-do-usuario';
import { Ex3VerificacaoDeIdade } from './ex3-verificacao-de-idade/ex3-verificacao-de-idade';
import { Ex4SituacaoDoEstoque } from './ex4-situacao-do-estoque/ex4-situacao-do-estoque';
import { Ex5ListaDeNomes } from './ex5-lista-de-nomes/ex5-lista-de-nomes';
import { Ex6TratamentoDeListaVazia } from './ex6-tratamento-de-lista-vazia/ex6-tratamento-de-lista-vazia';
import { Ex7CoresAlternadas } from './ex7-cores-alternadas/ex7-cores-alternadas';
import { Ex8ListaDeProdutos } from './ex8-lista-de-produtos/ex8-lista-de-produtos';

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
  {
    path: 'ex5',
    component: Ex5ListaDeNomes,
  },
  {
    path: 'ex6',
    component: Ex6TratamentoDeListaVazia,
  },
  {
    path: 'ex7',
    component: Ex7CoresAlternadas,
  },
  {
    path: 'ex8',
    component: Ex8ListaDeProdutos,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicios2RoutingModule { }
