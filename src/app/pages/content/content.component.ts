import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = '';        // Capa da imagem a ser exibida
  contentTitle: string = '';     // Título do conteúdo
  contentDescription: string = '';  // Descrição do conteúdo
  private id: string | null = '0';  // ID do artigo obtido da URL

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get('id')  // Pega o ID da URL
    );

    this.setValuesToComponent(this.id);  // Define os valores do conteúdo
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id.toString() === id)[0];  // Filtra o artigo pelo ID
    this.contentTitle = result.title;  // Atribui o título
    this.contentDescription = result.description;  // Atribui a descrição
    this.photoCover = result.photoCover;  // Atribui a capa da imagem
  }
}
