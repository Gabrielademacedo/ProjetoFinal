import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-modal",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./modal.html",
  styleUrls: ["./modal.css"],
})
export class Modal {
  @Input() localizacao!: boolean;
  @Input() servicos!: boolean;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
