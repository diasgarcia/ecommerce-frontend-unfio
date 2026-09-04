import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaExerciciosRoutingModule } from './lista-exercicios-routing-module';
import { Ex1ApresentacaoDoAluno } from './ex1-apresentacao-do-aluno/ex1-apresentacao-do-aluno';
import { FormsModule } from '@angular/forms';
import { Ex2CalculandoComInterpolation } from './ex2-calculando-com-interpolation/ex2-calculando-com-interpolation';
import { Ex3ImagemDinamica } from './ex3-imagem-dinamica/ex3-imagem-dinamica';
import { Ex4BotaoHabilitadoOuDesabilitado } from './ex4-botao-habilitado-ou-desabilitado/ex4-botao-habilitado-ou-desabilitado';
import { Ex5ContadorDeCurtidas } from './ex5-contador-de-curtidas/ex5-contador-de-curtidas';
import { Ex6ContadorCompleto } from './ex6-contador-completo/ex6-contador-completo';
import { Ex7NomeEmTempoReal } from './ex7-nome-em-tempo-real/ex7-nome-em-tempo-real';
import { Ex8CadastroDeProduto } from './ex8-cadastro-de-produto/ex8-cadastro-de-produto';
import { Ex9ControleEstoque } from './ex9-controle-estoque/ex9-controle-estoque';
import { Ex10LoginSimulado } from './ex10-login-simulado/ex10-login-simulado';
import { Ex11CarrinhoDeCompras } from './ex11-carrinho-de-compras/ex11-carrinho-de-compras';

@NgModule({
  declarations: [
    Ex1ApresentacaoDoAluno,
    Ex2CalculandoComInterpolation,
    Ex3ImagemDinamica,
    Ex4BotaoHabilitadoOuDesabilitado,
    Ex5ContadorDeCurtidas,
    Ex6ContadorCompleto,
    Ex7NomeEmTempoReal,
    Ex8CadastroDeProduto,
    Ex9ControleEstoque,
    Ex10LoginSimulado,
    Ex11CarrinhoDeCompras,
  ],
  imports: [CommonModule, FormsModule, ListaExerciciosRoutingModule],
})
export class ListaExerciciosModule {}
