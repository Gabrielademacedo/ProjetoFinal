import { Component, OnInit } from "@angular/core";
import { Veiculo } from "../../models/veiculo.model";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { VehicleDetails } from "../vehicle-details/vehicle-details";
import { Modal } from "../modal/modal";
import { ModalService } from "../../services/modal.service";

@Component({
  selector: "app-dashboard",
  imports: [ReactiveFormsModule, CommonModule, VehicleDetails, Modal],
  templateUrl: "./dashboard.html",
  styleUrl: "./dashboard.css",
})
export class Dashboard implements OnInit {
  vehicleData!: Veiculo;
  errorMessage?: string;
  showDetails = false;
  showModal = false;

  modalLocalizacao = false;
  modalServicos = false;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.vehicleData = {
      id: 1,
      nomeModelo: "Mustang GT Performance V8 5.0L 2025",
      placa: "RDE4B12",
      chassi: "9BWZZZ377VT004251",
      anoFabricacao: 2025,
      cor: "Preto Astúrias",
      imagem: "img/mustangprop.png",

      odometro: 1.234, // em km
      nivelCombustivel: 42, // em %
      autonomia: 128, // em km
      statusVeiculo: "Ativo",
      ultimaRevisao: "2025-05-10",
      proximaRevisao: "2025-11-10",

      conectado: true,
      atualizacoesPendentes: 3,

      localizacao: {
        lat: -23.564,
        long: -46.654,
      },
    };

    this.modalService.openModal$.subscribe((data) => {
      this.modalLocalizacao = data.localizacao;
      this.modalServicos = data.servicos;
      this.openModal();
    });
  }
  openDetails() {
    this.showDetails = true;
  }

  closeDetails() {
    this.showDetails = false;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
