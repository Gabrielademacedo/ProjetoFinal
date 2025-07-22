import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Veiculo } from "../../models/veiculo.model";
import { CommonModule } from "@angular/common";
import { NgbDate, NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-vehicle-details",
  standalone: true,
  imports: [
    CommonModule,
    NgbDatepickerModule,
    FormsModule,
    NgSelectModule,
    NgbAlertModule,
  ],
  templateUrl: "./vehicle-details.html",
  styleUrls: ["./vehicle-details.css"],
})
export class VehicleDetails {
  @Input() vehicle!: Veiculo;
  @Output() close = new EventEmitter<void>();

  selectedDate?: NgbDate;
  oficinaSelecionada: any = null;
  success = false;
  mensagem = "";

  revisoesSugeridas = [
    { data: new Date("2025-11-10"), descricao: "Troca de óleo e filtro" },
    { data: new Date("2026-05-10"), descricao: "Verificação dos freios" },
    { data: new Date("2026-11-10"), descricao: "Alinhamento e balanceamento" },
  ];

  oficinasFord = [
    {
      nome: "Ford Concessionária Central",
      endereco: "Av. Paulista, 1000 - São Paulo, SP",
      lat: -23.561414,
      long: -46.656007,
    },
    {
      nome: "Ford Oficina Auto Service",
      endereco: "Rua das Flores, 50 - São Paulo, SP",
      lat: -23.564,
      long: -46.658,
    },
  ];

  closeDetails() {
    this.close.emit();
  }

  distancia(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const toRad = (x: number) => (x * Math.PI) / 180;

    const R = 6371; // raio da Terra em km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  oficinaMaisProxima() {
    if (!this.vehicle.localizacao) return null;

    const { lat, long } = this.vehicle.localizacao;

    let maisProxima = this.oficinasFord[0];
    let menorDistancia = this.distancia(
      lat,
      long,
      maisProxima.lat,
      maisProxima.long
    );

    for (const oficina of this.oficinasFord) {
      const d = this.distancia(lat, long, oficina.lat, oficina.long);
      if (d < menorDistancia) {
        menorDistancia = d;
        maisProxima = oficina;
      }
    }
    return { oficina: maisProxima, distancia: menorDistancia.toFixed(1) };
  }

  agendar() {
    setTimeout(() => {
      if (!this.selectedDate) {
        this.mensagem = "Selecione uma data para agendar o serviço.";
        return;
      }

      if (!this.oficinaSelecionada) {
        this.mensagem = "Selecione uma oficina.";
        return;
      }

      const nomeOficina = this.oficinaSelecionada.nome;
      const endereco = this.oficinaSelecionada.endereco;
      const dataFormatada = `${this.selectedDate.day
        .toString()
        .padStart(2, "0")}/${this.selectedDate.month
        .toString()
        .padStart(2, "0")}/${this.selectedDate.year}`;

      this.mensagem = `Solicitação de agendamento realizado com sucesso para o dia <strong>${dataFormatada}</strong> na oficina <strong>${nomeOficina}</strong>, localizada em <strong>${endereco}</strong>. Mais informações serão enviadas para o seu e-mail.`;
    }, 500);
  }

  voltar() {
    this.closeDetails();
  }

  onDateSelect(date: NgbDate) {
    this.selectedDate = date;
  }
}
