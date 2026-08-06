import { Component, signal } from '@angular/core';
import { Interface } from './interface';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-exemplo-signal-form',
  imports: [FormField],
  templateUrl: './exemplo-signal-form.html',
  styleUrl: './exemplo-signal-form.css',
})
export class ExemploSignalForm {

  interfaceModel = signal<Interface>({
    titulo: '',
    descricao: '',
    preco: null
  })

  interfaceForm = form(this.interfaceModel);


  cadastrarProduto (event : SubmitEvent) {
    event.preventDefault();

    const produto = this.interfaceModel();
    alert("produto foi cadastrado.")
    console.log (produto)

     this.interfaceModel.set ({
      titulo: '',
      descricao: '',
      preco : null
    })
  }
}

