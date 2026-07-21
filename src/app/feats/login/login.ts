import { LocationUpgradeModule } from '@angular/common/upgrade';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  protected logado = false;

  protected alterarLogin() {
    this.logado = !this.logado;
  }
}