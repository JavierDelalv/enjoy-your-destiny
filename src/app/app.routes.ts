import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DestinosComponent } from './components/destinos/destinos.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'destinos', component: DestinosComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
