import { Component, signal } from '@angular/core';
import { form, required, FormField } from '@angular/forms/signals';
import { Login } from './login';

@Component({
  selector: 'app-logar',
  imports: [FormField],
  templateUrl: './logar.html',
  styleUrl: './logar.css',
})
export class Logar {

  protected loginModel = signal<Login>({
    nome: '',
    senha: '',
  })

  loginForm = form(this.loginModel , (s)=> {
    required(s.nome,{message: 'Preencha este campo.'})
    required(s.senha,{message: 'Preencha este campo.'});  
  
  });

    

    usuarios = signal<Login[]>([]);

    estaLogado = signal<boolean>(false)

  cadastrar (event : SubmitEvent) {
    event.preventDefault();

    const usuario = this.loginModel();
    if (usuario.nome === "gregory@email.com" && usuario.senha === '123') {
      this.estaLogado.set(true) 
    }
    this.loginModel.set ({
      nome: '',
      senha: '',
    })

  }}