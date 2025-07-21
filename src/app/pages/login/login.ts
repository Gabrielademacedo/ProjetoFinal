import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, NgbCarouselModule],
  templateUrl: "./login.html",
  styleUrl: "./login.css",
})
export class Login implements OnInit {
  formLogin!: FormGroup;
  passwordVisible = false;
  errorMessage = "";

  usuario = {
    id: 1,
    login: "admin",
    nome: "Gabriela de Macedo",
    senha: "123456",
    email: "gabriela@email.com",
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      nome: ["", Validators.required],
      senha: ["", Validators.required],
    });
  }

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
    const input = document.getElementById("InputPassword") as HTMLInputElement;
    const icon = document.querySelector(".toggle-password") as HTMLElement;

    if (this.passwordVisible) {
      input.type = "text";
      icon.classList.remove("bi-eye-slash");
      icon.classList.add("bi-eye");
    } else {
      input.type = "password";
      icon.classList.remove("bi-eye");
      icon.classList.add("bi-eye-slash");
    }
  }

  onSubmit() {
    if (this.formLogin.invalid) {
      this.errorMessage = "Por favor, preencha todos os campos corretamente.";
      return;
    }

    const { nome, senha } = this.formLogin.value;

    if (nome === this.usuario.login && senha === this.usuario.senha) {
      this.authService.login({
        id: this.usuario.id,
        nome: this.usuario.nome,
        email: this.usuario.email,
      });
      this.router.navigate(["/welcome"]);
    } else {
      this.errorMessage = "Usuário ou senha inválidos.";
    }
  }
}
