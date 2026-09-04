import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1ApresentacaoDoAluno } from './ex1-apresentacao-do-aluno/ex1-apresentacao-do-aluno';
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

const routes: Routes = [
  {
    path: 'ex1-apresentacao-do-aluno',
    component: Ex1ApresentacaoDoAluno,
  },
  {
    path: 'ex2-calculando-com-interpolation',
    component: Ex2CalculandoComInterpolation,
  },
  {
    path: 'ex3-imagem-dinamica',
    component: Ex3ImagemDinamica,
  },
  {
    path: 'ex4-botao-habilitado-ou-desabilitado',
    component: Ex4BotaoHabilitadoOuDesabilitado,
  },
  {
    path: 'ex5-contador-de-curtidas',
    component: Ex5ContadorDeCurtidas,
  },
  {
    path: 'ex6-contador-completo',
    component: Ex6ContadorCompleto,
  },
  {
    path: 'ex7-nome-em-tempo-real',
    component: Ex7NomeEmTempoReal,
  },
  {
    path: 'ex8-cadastro-de-produto',
    component: Ex8CadastroDeProduto,
  },
  {
    path: 'ex9-controle-estoque',
    component: Ex9ControleEstoque,
  },
  {
    path: 'ex10-login-simulado',
    component: Ex10LoginSimulado,
  },
  {
    path: 'ex11-carrinho-de-compras',
    component: Ex11CarrinhoDeCompras,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExerciciosRoutingModule {}
