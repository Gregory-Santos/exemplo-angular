import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-pessoa-component',
  imports: [],
  templateUrl: './pessoa-component.html',
  styleUrl: './pessoa-component.css',
})
export class PessoaComponent {
  persona1: Pessoa = {

    nome: 'Jordan',
    idade: '21',
    nascimento: '29/09/2004',
    sexo: 'Masculino',
    estadoCivil: 'Solteiro',
  }
  persona2: Pessoa = {

    nome: 'Gregory',
    idade: '16',
    nascimento: '16/05/2010',
    sexo: 'Masculino',
    estadoCivil: 'Solteiro',
  }
}
