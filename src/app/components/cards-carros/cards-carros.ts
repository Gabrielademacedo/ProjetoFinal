import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-cards-carros',
  imports: [],
  templateUrl: './cards-carros.html',
  styleUrl: './cards-carros.css',
})
export class CardsCarros {
  @Input() imagem?: string;
  @Input() titulo?: string;
  @Input() descricao?: string;
}
