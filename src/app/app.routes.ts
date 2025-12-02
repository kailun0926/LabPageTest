// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // Redirect default path to home
    pathMatch: 'full',
  },
  {
    path: 'home',
    // Lazy load the home component
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'team',
    loadComponent: () =>
      import('./team/team.component').then((m) => m.TeamComponent),
  },
  {
    path: 'professor', // The ':id' is a route parameter
    loadComponent: () =>
      import('./professor/professor.component').then(
        (m) => m.ProfessorComponent
      ),
  },
  {
    path: 'research',
    loadComponent: () =>
      import('./research/research.component').then((m) => m.ResearchComponent),
  },
  {
    path: 'research/nstc',
    loadComponent: () =>
      import('./research/nstc.component').then((m) => m.NstcComponent),
  },
  {
    path: 'research/collab',
    loadComponent: () =>
      import('./research/collab.component').then((m) => m.CollabComponent),
  },
  {
    path: 'research/publication',
    loadComponent: () =>
      import('./research/publication.component').then((m) => m.PublicationComponent),
  },
  // ... other lazy-loaded routes
];