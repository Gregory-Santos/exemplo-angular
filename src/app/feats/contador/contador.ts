import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {

  contador: number = 0;

  incrementar() {
    this.contador++;
  }

  resetar() {
    this.contador = 0;

}
}