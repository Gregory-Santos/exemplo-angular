import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuComponente } from './meu-componente/meu-componente';
import { Valores } from './valores/valores';
import { Introducao } from './introducao/introducao';
import { PessoaComponent } from "./pessoa-component/pessoa-component";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { SideBar } from "./components/side-bar/side-bar";
import { Event } from "./feats/event/event";
import { PropBinding } from './feats/prop-binding/prop-binding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MeuComponente, Valores, Introducao, PessoaComponent, Header, Footer, SideBar, Event, PropBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exemplo-angular');
}