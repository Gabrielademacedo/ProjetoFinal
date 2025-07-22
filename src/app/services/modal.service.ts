import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  private openModalSource = new Subject<{
    localizacao: boolean;
    servicos: boolean;
  }>();
  openModal$ = this.openModalSource.asObservable();

  triggerOpenModal(data: { localizacao: boolean; servicos: boolean }) {
    this.openModalSource.next(data);
  }
}
