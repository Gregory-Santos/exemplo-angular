import { Component, signal } from '@angular/core';
import { Aluno } from './aluno';
import { form, FormField, max, min, required } from "@angular/forms/signals";

@Component({
  selector: 'app-alunos',
  imports: [FormField],
  templateUrl: './alunos.html',
  styleUrl: './alunos.css',
})
export class Alunos {

   protected loginModel = signal<Aluno>({
    aluno: '',
    media: null
  })

  protected alunos = signal<Aluno[]>([])

  protected loginForm = form(this.loginModel , (s)=> {
    
    required(s.aluno,{message: 'Preencha este campo.'});
    required(s.media,{message: 'Preencha este campo.'});
    min(s.media, 0, {message: 'Você deve ter uma média maior que 0.'});
    max(s.media, 10, {message: 'Você deve ter uma média até 10.'});
  })
  
  cadastrarAluno (event : SubmitEvent) {
    event.preventDefault();

    const aluno = this.loginModel();

    this.alunos.update(valor => [...valor, aluno] )
    
    console.log (aluno)

    this.loginModel.set ({
      aluno: '',
      media: null
    })
}
}