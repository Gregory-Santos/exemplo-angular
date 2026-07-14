import { Component, createPlatform } from '@angular/core';
import { Desenvolvimento } from './desenvolvimento';

@Component({
  selector: 'app-introducao',
  imports: [],
  templateUrl: './introducao.html',
  styleUrl: './introducao.css',
})
export class Introducao {

  // senai: Desenvolvimento = {
  //   cep: '89030000',
  //   estado: 'Santa Catarina',
  //   cidade: 'Blumenau',
  //   bairro: 'Victor Konder',
  //   rua:'São Paulo',
  //   numero: '100'
  // };

 eu: Desenvolvimento = {
  meunome: 'Gregory',
  idade: '16',
  bairro: 'Velha Central',
  cidade: 'Blumenau',
  curso: 'Front-end',
  programa: 'Entra21'
}
}
