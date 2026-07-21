import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {

  protected contador: number = 0;

  protected incrementar() {
    this.contador++;
  }

  protected resetar() {
    this.contador = 0;

}
}