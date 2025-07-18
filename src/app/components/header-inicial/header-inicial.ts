import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-inicial',
  imports: [],
  templateUrl: './header-inicial.html',
  styleUrl: './header-inicial.css',
})
export class HeaderInicial {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
