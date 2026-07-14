import { Routes } from '@angular/router';
import { Contato } from './feats/contato/contato';
import { Home } from './feats/home/home';

export const routes: Routes = [
    
    {path: 'contato', component: Contato},
    {path: 'casa', component: Home},
    {path: '', redirectTo: 'casa', pathMatch: 'full'}
];