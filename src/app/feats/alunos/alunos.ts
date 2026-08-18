import { Component, inject, signal } from '@angular/core';
import { Aluno } from './aluno';
import { form, FormField, max, min, required } from "@angular/forms/signals";
import { AlunosService } from './alunos-service';

@Component({
  selector: 'app-alunos',
  imports: [FormField],
  templateUrl: './alunos.html',
  styleUrl: './alunos.css',
})
export class Alunos {

  protected readonly cadastroAlunosService = inject(AlunosService);

   protected loginModel = signal<Aluno>({
    aluno: '',
    media: null
  })

  // protected alunos = signal<Aluno[]>([])

  protected loginForm = form(this.loginModel , (s)=> {
    required(s.aluno,{message: 'Preencha este campo.'});
    required(s.media,{message: 'Preencha este campo.'});
    min(s.media, 0, {message: 'Você deve ter uma média maior que 0.'});
    max(s.media, 10, {message: 'Você deve ter uma média até 10.'});
  })
  
  protected cadastrarAluno (event : SubmitEvent) {
    event.preventDefault();

    const aluno = this.loginModel();

    this.cadastroAlunosService.cadastrarAluno(aluno);
    
    this.loginModel.set ({
      aluno: '',
      media: null
    })

    this.loginForm().reset();
}
}