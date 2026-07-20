import { LocationUpgradeModule } from '@angular/common/upgrade';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  logado: boolean = false;

  alterarLogin() {
    this.logado = !this.logado;
  }
}