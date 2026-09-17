import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaExercicios2RoutingModule } from './lista-exercicios-2-routing-module';
import { CampoTexto } from './campo-texto/campo-texto';
import { Ex1ExibicaoDeMensagem } from './ex1-exibicao-de-mensagem/ex1-exibicao-de-mensagem';

@NgModule({
  declarations: [CampoTexto, Ex1ExibicaoDeMensagem],
  imports: [CommonModule, ListaExercicios2RoutingModule],
})
export class ListaExercicios2Module {}
