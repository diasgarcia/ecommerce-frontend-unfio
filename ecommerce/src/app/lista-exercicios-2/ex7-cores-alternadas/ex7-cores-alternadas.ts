import { Component } from '@angular/core';

@Component({
  selector: 'app-ex7-cores-alternadas',
  standalone: false,
  templateUrl: './ex7-cores-alternadas.html',
  styleUrl: './ex7-cores-alternadas.scss',
})
export class Ex7CoresAlternadas {
  diciplinas = [
    {id: 1, nome: "banco de dados"},
    {id: 2, nome: "estrutura de dados"},
    {id: 3, nome: "redes e segurança"},
    {id: 4, nome: "desenvolvimento web"},
    {id: 5, nome: "projeto integrador IV"},
    {id: 6, nome: "engenharia de requisitos"},
  ]
}
