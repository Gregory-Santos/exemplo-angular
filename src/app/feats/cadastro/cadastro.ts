import { Component, signal } from '@angular/core';
import { form, FormField, max, min, required } from "@angular/forms/signals";

@Component({
  selector: 'app-cadastro',
  imports: [FormField],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  
//   protected usuario = signal {
//     nome: '',
//     email: '',
//     senha: '',
//     confirmarSenha: '',
//     dataNascimento: ''

// };

// protected loginForm = form(this.loginModel , (s)=> {
//     required(s.aluno,{message: 'Preencha este campo.'});
//     required(s.media,{message: 'Preencha este campo.'});
//     min(s.media, 0, {message: 'Você deve ter uma média maior que 0.'});
//     max(s.media, 10, {message: 'Você deve ter uma média até 10.'});
//   })
 
//   protected usuarioModel 

}