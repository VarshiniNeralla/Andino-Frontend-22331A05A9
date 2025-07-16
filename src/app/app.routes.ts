import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Home } from './home/home';
import { GetStarted } from './get-started/get-started';
import { Roadmap } from './roadmap/roadmap';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'signup', component: Signup },
  { path: 'home', component: Home },
  { path: 'get-started', component: GetStarted },
  { path: 'roadmap', component: Roadmap },
];


