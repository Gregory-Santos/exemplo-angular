import { Component, inject, signal } from '@angular/core';
import { form, required, FormField } from '@angular/forms/signals';
import { Login } from './login';
import { UsuariosService } from '../usuarios/usuarios-service';
import { LogarService } from './logar-service';

@Component({
  selector: 'app-logar',
  imports: [FormField],
  templateUrl: './logar.html',
  styleUrl: './logar.css',
})
export class Logar {

  protected readonly logarService = inject(LogarService);

  protected loginModel = signal<Login>({
    nome: '',
    senha: ''
  })

  protected loginForm = form(this.loginModel , (s)=> {
    required(s.nome,{message: 'Preencha este campo.'})
    required(s.senha,{message: 'Preencha este campo.'});
  
  });

    usuarios = signal<Login[]>([]);

    estaLogado = signal<boolean>(false)
    

  protected cadastrar (event : SubmitEvent) {
    event.preventDefault();

    const usuario = this.loginModel();
    
    this.estaLogado.set (
      this.logarService.validarGregory(usuario)
    )

    this.loginModel.set ({
      nome: '',
      senha: ''
    })

    this.loginForm().reset()
  }}