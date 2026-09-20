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
import { Ex9ClassificacaoDosProdutos } from './ex9-classificacao-dos-produtos/ex9-classificacao-dos-produtos';
import { Ex10PromocaoEEstiloDinamico } from './ex10-promocao-e-estilo-dinamico/ex10-promocao-e-estilo-dinamico';
import { Ex11ExibirSomenteProdutosDisponiveis } from './ex11-exibir-somente-produtos-disponiveis/ex11-exibir-somente-produtos-disponiveis';
import { Ex12CadastroSimplificado } from './ex12-cadastro-simplificado/ex12-cadastro-simplificado';
import { Ex13ListaDeTarefas } from './ex13-lista-de-tarefas/ex13-lista-de-tarefas';

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
  {
    path: 'ex9',
    component: Ex9ClassificacaoDosProdutos,
  },
  {
    path: 'ex10',
    component: Ex10PromocaoEEstiloDinamico,
  },
  {
    path: 'ex11',
    component: Ex11ExibirSomenteProdutosDisponiveis,
  },
  {
    path: 'ex12',
    component: Ex12CadastroSimplificado,
  },
  {
    path: 'ex13',
    component: Ex13ListaDeTarefas,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicios2RoutingModule {}
