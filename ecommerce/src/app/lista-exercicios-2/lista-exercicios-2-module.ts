import { CommonModule, CurrencyPipe, NgClass } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CampoTexto } from './campo-texto/campo-texto';
import { Ex1ExibicaoDeMensagem } from './ex1-exibicao-de-mensagem/ex1-exibicao-de-mensagem';
import { Ex2SituacaoDoUsuario } from './ex2-situacao-do-usuario/ex2-situacao-do-usuario';
import { Ex3VerificacaoDeIdade } from './ex3-verificacao-de-idade/ex3-verificacao-de-idade';
import { Ex4SituacaoDoEstoque } from './ex4-situacao-do-estoque/ex4-situacao-do-estoque';
import { ListaExercicios2RoutingModule } from './lista-exercicios-2-routing-module';
import { Ex5ListaDeNomes } from './ex5-lista-de-nomes/ex5-lista-de-nomes';
import { Ex6TratamentoDeListaVazia } from './ex6-tratamento-de-lista-vazia/ex6-tratamento-de-lista-vazia';
import { Ex7CoresAlternadas } from './ex7-cores-alternadas/ex7-cores-alternadas';
import { Ex8ListaDeProdutos } from './ex8-lista-de-produtos/ex8-lista-de-produtos';
import { Ex9ClassificacaoDosProdutos } from './ex9-classificacao-dos-produtos/ex9-classificacao-dos-produtos';
import { Ex10PromocaoEEstiloDinamico } from './ex10-promocao-e-estilo-dinamico/ex10-promocao-e-estilo-dinamico';
import { Ex11ExibirSomenteProdutosDisponiveis } from './ex11-exibir-somente-produtos-disponiveis/ex11-exibir-somente-produtos-disponiveis';
import { Ex12CadastroSimplificado } from './ex12-cadastro-simplificado/ex12-cadastro-simplificado';
import { Ex13ListaDeTarefas } from './ex13-lista-de-tarefas/ex13-lista-de-tarefas';
import { DesafioFinalPainelDeProjetos } from './desafio-final-painel-de-projetos/desafio-final-painel-de-projetos';

@NgModule({
  declarations: [
    CampoTexto,
    Ex1ExibicaoDeMensagem,
    Ex2SituacaoDoUsuario,
    Ex3VerificacaoDeIdade,
    Ex4SituacaoDoEstoque,
    Ex5ListaDeNomes,
    Ex6TratamentoDeListaVazia,
    Ex7CoresAlternadas,
    Ex8ListaDeProdutos,
    Ex9ClassificacaoDosProdutos,
    Ex10PromocaoEEstiloDinamico,
    Ex11ExibirSomenteProdutosDisponiveis,
    Ex12CadastroSimplificado,
    Ex13ListaDeTarefas,
    DesafioFinalPainelDeProjetos,
  ],
  imports: [CommonModule, FormsModule, CurrencyPipe, NgClass, ListaExercicios2RoutingModule],
})
export class ListaExercicios2Module {}
