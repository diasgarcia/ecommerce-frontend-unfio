import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6-contador-completo',
  standalone: false,
  templateUrl: './ex6-contador-completo.html',
  styleUrl: './ex6-contador-completo.scss',
})
export class Ex6ContadorCompleto {
  quantidade = 0;

  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }
}
