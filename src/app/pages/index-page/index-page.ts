import { Component } from "@angular/core";
import { HeaderInicial } from "../../components/header-inicial/header-inicial";
import { Footer } from "../../components/footer/footer";
import { CardsCarros } from "../../components/cards-carros/cards-carros";
import { CommonModule } from "@angular/common";

interface Carros {
  imagem: string;
  modelo: string;
  titulo: string;
}

@Component({
  selector: "app-index-page",
  imports: [HeaderInicial, Footer, CardsCarros, CommonModule],
  templateUrl: "./index-page.html",
  styleUrl: "./index-page.css",
})
export class IndexPage {
  items: Carros[] = [
    {
      imagem: "img/broncoSport.png",
      modelo: "Ford Bronco Sport 2022",
      titulo: "Aventura, robustez e desempenho em qualquer terreno.",
    },
    {
      imagem: "img/mustang.png",
      modelo: "Ford Mustang",
      titulo: "Design icônico, potência e emoção em cada curva.",
    },
    {
      imagem: "img/ranger.png",
      modelo: "Ford Ranger 2022",
      titulo: "Força, tecnologia e versatilidade para todos os caminhos.",
    },
    {
      imagem: "img/territory.png",
      modelo: "Ford Territory",
      titulo: "Conforto, sofisticação e conectividade em um SUV inteligente.",
    },
  ];

  ngOnInit() {
    document.body.classList.add("index-bg");
  }

  ngOnDestroy() {
    document.body.classList.remove("index-bg");
  }
}
