import { Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { CreatePersonPageComponent } from './Pages/create-person-page/create-person-page.component';
import { EditPersonPageComponent } from './Pages/edit-person-page/edit-person-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'person',
    component: CreatePersonPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'edit',
    component: EditPersonPageComponent,
    pathMatch: 'full',
  },
];
