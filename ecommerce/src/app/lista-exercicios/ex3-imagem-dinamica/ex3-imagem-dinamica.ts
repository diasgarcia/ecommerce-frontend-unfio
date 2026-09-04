import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3-imagem-dinamica',
  standalone: false,
  templateUrl: './ex3-imagem-dinamica.html',
  styleUrl: './ex3-imagem-dinamica.scss',
})
export class Ex3ImagemDinamica {
  imagemProduto = "https://upload.wikimedia.org/wikipedia/pt/8/84/Vieux_guitariste_aveugle.jpg";
  descricaoImagem = "O Velho Guitarrista Cego (Vieux guitariste aveugle) é uma famosa pintura a óleo de Pablo Picasso, criada em 1903 durante o chamado Período Azul do artista";
}
