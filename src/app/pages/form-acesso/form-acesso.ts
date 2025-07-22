import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { Router } from "@angular/router";
import { NgbAlertConfig, NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-form-acesso",
  standalone: true,
  imports: [NgbAlertModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: "./form-acesso.html",
  styleUrl: "./form-acesso.css",
  providers: [NgbAlertConfig],
})
export class FormAcesso implements OnInit {
  formLogin!: FormGroup;
  errorMessage = "";
  success = false; // <-- Novo estado para exibir alerta

  constructor(
    private fb: FormBuilder,
    private router: Router,
    alertConfig: NgbAlertConfig
  ) {}

  ngOnInit() {
    this.formLogin = this.fb.group({
      cpf: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      termos: [false, Validators.requiredTrue],
      novidades: [false],
    });
    document.body.classList.add("index-bg");
  }

  onSubmit() {
    if (this.formLogin.invalid) {
      this.errorMessage =
        "Por favor, preencha CPF, E-mail e aceite os Termos e Condições.";
      this.success = false;
      return;
    }

    const { cpf, email } = this.formLogin.value;

    if (cpf && email) {
      this.errorMessage = "";
      this.success = true;

      // simulação de envio de email...
      setTimeout(() => {
        this.success = false;
        this.router.navigate(["/login"]);
      }, 3000); // espera 3s antes de redirecionar
    } else {
      this.success = false;
      this.errorMessage = "CPF ou e-mail inválidos.";
    }
  }

  ngOnDestroy() {
    document.body.classList.remove("index-bg");
  }
}
