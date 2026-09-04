import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaExerciciosRoutingModule } from './lista-exercicios-routing-module';
import { Ex1ApresentacaoDoAluno } from './ex1-apresentacao-do-aluno/ex1-apresentacao-do-aluno';
import { FormsModule } from '@angular/forms';
import { Ex2CalculandoComInterpolation } from './ex2-calculando-com-interpolation/ex2-calculando-com-interpolation';
import { Ex3ImagemDinamica } from './ex3-imagem-dinamica/ex3-imagem-dinamica';
import { Ex4BotaoHabilitadoOuDesabilitado } from './ex4-botao-habilitado-ou-desabilitado/ex4-botao-habilitado-ou-desabilitado';
import { Ex5ContadorDeCurtidas } from './ex5-contador-de-curtidas/ex5-contador-de-curtidas';

@NgModule({
  declarations: [
    Ex1ApresentacaoDoAluno,
    Ex2CalculandoComInterpolation,
    Ex3ImagemDinamica,
    Ex4BotaoHabilitadoOuDesabilitado,
    Ex5ContadorDeCurtidas,
  ],
  imports: [CommonModule, FormsModule, ListaExerciciosRoutingModule],
})
export class ListaExerciciosModule {}
