import { Routes } from '@angular/router';
import { Contato } from './feats/contato/contato';
import { Home } from './feats/home/home';
import { Component } from '@angular/core';
import { PropBinding } from './feats/prop-binding/prop-binding';
import { Input } from './feats/input/input';
import { Contador } from './feats/contador/contador';
import { Login } from './feats/login/login';
import { Signals } from './feats/signals/signals';
import { Usuarios } from './feats/usuarios/usuarios';
import { ExemploSignalForm } from './feats/exemplo-signal-form/exemplo-signal-form';
import { Logar } from './feats/logar/logar';
import { Alunos } from './feats/alunos/alunos';

export const routes: Routes = [
    
    {path: 'contato', component: Contato},
    {path: 'casa', component: Home},
    {path: 'prop-binding', component: PropBinding},
    {path: 'input', component: Input},
    {path: 'contador', component: Contador},
    {path: 'login', component: Login},
    {path: 'signals', component: Signals},
    {path: 'usuarios', component: Usuarios},
    {path: 'exemplo-signal-form', component: ExemploSignalForm},
    {path: 'logar', component: Logar},
    {path: 'alunos', component: Alunos},
    {path: '', redirectTo: 'casa', pathMatch: 'full'}
];