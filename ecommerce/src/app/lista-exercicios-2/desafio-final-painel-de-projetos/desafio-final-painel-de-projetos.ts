import { Component } from '@angular/core';

export type StatusProjeto = 'planejamento' | 'desenvolvimento' | 'testes' | 'concluído';

export interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota: number | null;
  status: StatusProjeto;
  entregue: boolean;
}

@Component({
  selector: 'app-desafio-final-painel-de-projetos',
  standalone: false,
  templateUrl: './desafio-final-painel-de-projetos.html',
  styleUrl: './desafio-final-painel-de-projetos.scss',
})
export class DesafioFinalPainelDeProjetos {
  mostrarConcluidos = true;

  statusOpcoes: StatusProjeto[] = ['planejamento', 'desenvolvimento', 'testes', 'concluído'];

  projetos: Projeto[] = [
    { id: 1, titulo: 'E-commerce UNFIO', equipe: 'Equipe Alpha', nota: null, status: 'planejamento', entregue: false },
    { id: 2, titulo: 'App de Delivery', equipe: 'Equipe Beta', nota: 8.5, status: 'desenvolvimento', entregue: false },
    { id: 3, titulo: 'Sistema de Biblioteca', equipe: 'Equipe Gama', nota: 5.5, status: 'testes', entregue: false },
    { id: 4, titulo: 'Portal do Aluno', equipe: 'Equipe Delta', nota: 7.0, status: 'concluído', entregue: true },
    { id: 5, titulo: 'Dashboard Financeiro', equipe: 'Equipe Épsilon', nota: 9.2, status: 'concluído', entregue: true },
    { id: 6, titulo: 'Blog Institucional', equipe: 'Equipe Zeta', nota: 6.5, status: 'desenvolvimento', entregue: false },
  ];

  get total(): number {
    return this.projetos.length;
  }

  get totalConcluidos(): number {
    return this.projetos.filter((p) => p.status === 'concluído').length;
  }

  get projetosVisiveis(): Projeto[] {
    if (this.mostrarConcluidos) {
      return this.projetos;
    }
    return this.projetos.filter((p) => p.status !== 'concluído');
  }

  alternarExibicaoConcluidos(): void {
    this.mostrarConcluidos = !this.mostrarConcluidos;
  }
}
