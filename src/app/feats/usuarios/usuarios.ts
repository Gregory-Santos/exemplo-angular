import { Component, signal } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {

  usuarios = signal<Usuario[]>([
    {
      id: 1,
      nome: 'Gregory',
      idade: 16
    },
    {
      id: 2,
      nome: 'Henrique',
      idade: 24,
      img: "https://th.bing.com/th/id/OIP.2rLfcagWz6okE12tJFYqJgAAAA?w=148&h=150&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    {
      id: 3,
      nome: 'Jordan',
      idade: 21,
      img: "https://th.bing.com/th/id/OIP.C37UW3nMJc-3nAqUkwg3bAAAAA?w=150&h=150&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      id: 4,
      nome: 'Rafael',
      idade: 21
    }
  ])

}
