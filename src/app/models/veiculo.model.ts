export interface Veiculo {
  id: number | string;
  nomeModelo: string;
  placa: string;
  chassi: string;
  anoFabricacao: number;
  cor: string;
  imagem: string;
  autonomia: number;
  odometro: number;
  nivelCombustivel: number;
  statusVeiculo: "Ativo" | "Em manutenção" | "Offline";
  ultimaRevisao: string;
  proximaRevisao: string;

  conectado: boolean;
  atualizacoesPendentes: number;

  localizacao: {
    lat: number;
    long: number;
  };
}
