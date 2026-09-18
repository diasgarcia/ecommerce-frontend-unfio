import { Component } from '@angular/core';

@Component({
  selector: 'app-ex5-lista-de-nomes',
  standalone: false,
  templateUrl: './ex5-lista-de-nomes.html',
  styleUrl: './ex5-lista-de-nomes.scss',
})
export class Ex5ListaDeNomes {
  pessoas = [
      { id: 1, nome: "Thiago" },
      { id: 2, nome: "Marco" },
      { id: 3, nome: "Sergio" },
      { id: 4, nome: "Carol" },
      { id: 5, nome: "Jessica"}
  ];
}
