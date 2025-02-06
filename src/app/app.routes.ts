import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
  { path: '', component: MainComponent }, // Landing page
  { path: 'detail/:id', component: DetailsComponent }, // Detail page
];
