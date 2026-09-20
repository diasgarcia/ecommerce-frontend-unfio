import { Component } from '@angular/core';

export interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'media' | 'alta';
  concluida: boolean;
}

@Component({
  selector: 'app-ex13-lista-de-tarefas',
  standalone: false,
  templateUrl: './ex13-lista-de-tarefas.html',
  styleUrl: './ex13-lista-de-tarefas.scss',
})
export class Ex13ListaDeTarefas {
  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Configurar ambiente de desenvolvimento', responsavel: 'Ana', prioridade: 'alta', concluida: true },
    { id: 2, titulo: 'Criar layout da página inicial', responsavel: 'Bruno', prioridade: 'media', concluida: false },
    { id: 3, titulo: 'Revisar documentação da API', responsavel: 'Carla', prioridade: 'baixa', concluida: false },
    { id: 4, titulo: 'Corrigir bug do carrinho', responsavel: 'Diego', prioridade: 'alta', concluida: false },
    { id: 5, titulo: 'Escrever testes unitários', responsavel: 'Elisa', prioridade: 'media', concluida: true },
    { id: 6, titulo: 'Atualizar dependências do projeto', responsavel: 'Fabio', prioridade: 'baixa', concluida: false },
  ];

  get total(): number {
    return this.tarefas.length;
  }

  get concluidas(): number {
    return this.tarefas.filter((t) => t.concluida).length;
  }

  get pendentes(): number {
    return this.tarefas.filter((t) => !t.concluida).length;
  }

  alternarSituacao(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;
  }
}
