import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {

  idade = signal(12);

  mudarValor() {
    this.idade.set(0)
  }

  incrementarIdade() {
    this.idade.update(atual => atual + 1)
  }
  
}