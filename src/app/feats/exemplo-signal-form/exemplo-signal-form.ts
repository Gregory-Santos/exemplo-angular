import { Component, signal } from '@angular/core';
import { Interface } from './interface';
import { form, FormField, required } from '@angular/forms/signals';

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

  protected interfaceForm = form(this.interfaceModel , (s)=> {
    required(s.titulo,{message: 'Preencha este campo.'})});

  produtos = signal<Interface[]>([]);


  cadastrarProduto (event : SubmitEvent) {
    event.preventDefault();

    const produto = this.interfaceModel();

    this.produtos.update(valor => [...valor, produto] )

    alert("produto foi cadastrado.")
    
    console.log (produto)

    this.interfaceModel.set ({
      titulo: '',
      descricao: '',
      preco : null
    })
  
  }

}