import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { Component, inject, Inject } from "@angular/core";
import { NgbActiveOffcanvas, NgbOffcanvas } from "@ng-bootstrap/ng-bootstrap";
import { Usuario } from "../../models/usuario.model";
import { ModalService } from "../../services/modal.service";

@Component({
  selector: "ngbd-offcanvas-content",
  template: `
    <div class="offcanvas-header">
      <img class="logo" src="img/ford.png" alt="Ford logo" />
      <button
        type="button"
        class="btn-close text-reset"
        aria-label="Close"
        (click)="activeOffcanvas.dismiss('Cross click')"
      ></button>
    </div>

    <div class="offcanvas-body d-flex flex-column justify-content-between">
      <div class="user-info p-3 rounded shadow-sm mb-4">
        <h5 class="mb-2">
          <i class="bi bi-person-circle me-2 text-primary"></i>
          <strong>{{ user.nome }}</strong>
        </h5>
        <p class="mb-0">
          <i class="bi bi-envelope me-2 text-secondary"></i>
          {{ user.email }}
        </p>
      </div>

      <div class="nav-buttons d-flex flex-column gap-2">
        <button class="btn btn-modern" (click)="goToDashboard()">
          <i class="bi bi-speedometer2 me-2"></i> Dashboard
        </button>

        <button class="btn btn-modern" (click)="openLocalizacaoModal()">
          <i class="bi bi-geo-alt-fill me-2"></i> Localização
        </button>

        <button class="btn btn-modern" (click)="openServicosModal()">
          <i class="bi bi-gear-wide-connected me-2"></i> Revisões
        </button>
      </div>

      <div class="mt-4">
        <button class="btn btn-logout w-100" (click)="logout()" title="Sair">
          <i class="bi bi-door-closed me-2"></i> Logout
        </button>
      </div>
    </div>
  `,
  styles: `
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .logo {
      width: 100px;
      height: auto;
    }

    .user-info {
      background-color: #f8f9fa;
      border-left: 4px solid #1b357e;
    }

    .nav-buttons .btn {
      width: 100%;
    }

    .btn-modern {
      background-color: #1b357e;
      color: white;
      font-weight: 500;
      border-radius: 8px;
      transition: background-color 0.3s ease;
    }

    .btn-modern:hover {
      background-color: #122a5e;
    }

    .btn-logout {
      background-color: #d9534f;
      color: white;
      font-weight: 500;
      border-radius: 8px;
    }

    .btn-logout:hover {
      background-color: #b52b27;
    }

    .offcanvas-body {
      padding: 1.5rem;
    }
  `,
})
export class NgbdOffcanvasContent {
  activeOffcanvas = inject(NgbActiveOffcanvas);
  user: Usuario = JSON.parse(localStorage.getItem("user") || "{}");

  constructor(
    private modalService: ModalService,
    private router: Router,
    @Inject(AuthService) private authService: AuthService
  ) {
    console.log("User from localStorage:", this.user);
  }

  goToDashboard() {
    this.router.navigate(["/dashboard"]);
    this.activeOffcanvas.dismiss("Dashboard click");
  }
  goToHome() {
    this.router.navigate(["/welcome"]);
    this.activeOffcanvas.dismiss("Dashboard click");
  }

  logout() {
    this.authService.logout();
    setTimeout(() => {
      this.router.navigate([""]);
      this.activeOffcanvas.dismiss("Logout click");
    }, 500);
  }

  openLocalizacaoModal() {
    this.modalService.triggerOpenModal({
      localizacao: true,
      servicos: false,
    });
    this.activeOffcanvas.dismiss();
  }

  openServicosModal() {
    this.modalService.triggerOpenModal({
      localizacao: false,
      servicos: true,
    });
    this.activeOffcanvas.dismiss();
  }
}

@Component({
  selector: "ngbd-offcanvas-component",
  templateUrl: "./offcanvas-component.html",
})
export class NgbdOffcanvasComponent {
  private offcanvasService = inject(NgbOffcanvas);

  open() {
    const offcanvasRef = this.offcanvasService.open(NgbdOffcanvasContent);
  }
}
