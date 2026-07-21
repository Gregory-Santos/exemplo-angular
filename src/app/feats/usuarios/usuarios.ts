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
      idade: 24
    }
  ])

}
