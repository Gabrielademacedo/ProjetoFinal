import { Component } from "@angular/core";
import { HeaderInicial } from "../../components/header-inicial/header-inicial";
import { Footer } from "../../components/footer/footer";
import { CardsCarros } from "../../components/cards-carros/cards-carros";
import { CommonModule } from "@angular/common";

interface Carros {
  imagem: string;
  modelo: string;
  titulo: string;
  link: string;
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
      imagem: "cards-carros/bronco.png",
      modelo: "Novo Bronco Sport",
      titulo:
        "Design robusto e inconfundível, Tração 4x4 de série com uma capacidade off-road excepcional, tecnologia moderna, conectividade e segurança para superar todo tipo de terreno.",
      link: "https://www.ford.com.br/suvs-e-crossovers/bronco-sport/",
    },
    {
      imagem: "cards-carros/mustang.png",
      modelo: "Mustang GT Performance",
      titulo:
        "Potência, torque, tecnologia e conectividade como você nunca viu.",
      link: "https://www.ford.com.br/performance/mustang/",
    },
    {
      imagem: "cards-carros/ranger.png",
      modelo: "Nova Geração Ranger",
      titulo:
        "Robustez, Tecnologia e Novas Experiências Ford. A revolução do segmento.",
      link: "https://www.ford.com.br/picapes/ranger/",
    },
    {
      imagem: "cards-carros/territory.png",
      modelo: "Novo Territory",
      titulo: "O design que você não esperava.",
      link: "https://www.ford.com.br/suvs-e-crossovers/territory/",
    },
  ];

  ngOnInit() {
    document.body.classList.add("index-bg");
  }

  ngOnDestroy() {
    document.body.classList.remove("index-bg");
  }
}
