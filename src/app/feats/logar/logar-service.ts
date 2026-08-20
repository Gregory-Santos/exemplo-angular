import { Service } from '@angular/core';
import { Login } from './login';

@Service()
export class LogarService {

  validarGregory(usuario: Login) {
    return usuario.nome === "gregory@email.com" && usuario.senha === '123'
  }
}