import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CampoTexto } from './campo-texto/campo-texto';
import { Ex1ExibicaoDeMensagem } from './ex1-exibicao-de-mensagem/ex1-exibicao-de-mensagem';
import { Ex2SituacaoDoUsuario } from './ex2-situacao-do-usuario/ex2-situacao-do-usuario';
import { Ex3VerificacaoDeIdade } from './ex3-verificacao-de-idade/ex3-verificacao-de-idade';
import { Ex4SituacaoDoEstoque } from './ex4-situacao-do-estoque/ex4-situacao-do-estoque';
import { ListaExercicios2RoutingModule } from './lista-exercicios-2-routing-module';

@NgModule({
  declarations: [
    CampoTexto,
    Ex1ExibicaoDeMensagem,
    Ex2SituacaoDoUsuario,
    Ex3VerificacaoDeIdade,
    Ex4SituacaoDoEstoque,
  ],
  imports: [CommonModule, FormsModule, ListaExercicios2RoutingModule],
})
export class ListaExercicios2Module {}
