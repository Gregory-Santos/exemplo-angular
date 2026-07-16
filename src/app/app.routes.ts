import { Routes } from '@angular/router';
import { Contato } from './feats/contato/contato';
import { Home } from './feats/home/home';
import { Component } from '@angular/core';
import { PropBinding } from './feats/prop-binding/prop-binding';
import { Input } from './feats/input/input';

export const routes: Routes = [
    
    {path: 'contato', component: Contato},
    {path: 'casa', component: Home},
    {path: 'prop-binding', component: PropBinding},
    {path: 'input', component: Input},
    {path: '', redirectTo: 'casa', pathMatch: 'full'}
];