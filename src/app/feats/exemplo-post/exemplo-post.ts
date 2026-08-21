import { Component, inject, signal } from '@angular/core';
import { ExemploPostInterface } from './exemplo-post-interface';
import { form, FormField } from '@angular/forms/signals';
import { ExemploPostService } from './exemplo-post-service';

@Component({
  selector: 'app-exemplo-post',
  imports: [FormField],
  templateUrl: './exemplo-post.html',
  styleUrl: './exemplo-post.css',
})
export class ExemploPost {

  protected readonly exemploPostService = inject(ExemploPostService)

  protected loginModel = signal<ExemploPostInterface>({
    userId: null,
    title: '',
    body: ''
  })

  protected loginForm = form(this.loginModel);

  protected cadastrarPost (event : SubmitEvent){
  event.preventDefault()
  
  const post = this.loginModel();

  this.exemploPostService.postCadastrado(post);
    
  this.loginModel.set ({
    userId: null,
    title: '',
    body: ''
    })

  this.loginForm().reset();

  }

}
