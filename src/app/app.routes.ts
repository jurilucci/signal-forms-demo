import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', loadComponent: () => import('./sections/intro/intro.component').then(m => m.IntroComponent) },
  { path: 'validation', loadComponent: () => import('./sections/validation/validation.component').then(m => m.ValidationComponent) },
  { path: 'custom-validators', loadComponent: () => import('./sections/custom-validators/custom-validators.component').then(m => m.CustomValidatorsComponent) },
  { path: 'schemas', loadComponent: () => import('./sections/schemas/schemas.component').then(m => m.SchemasComponent) },
  { path: 'submit-reset', loadComponent: () => import('./sections/submit-reset/submit-reset.component').then(m => m.SubmitResetComponent) },
  { path: 'custom-control', loadComponent: () => import('./sections/custom-control/custom-control.component').then(m => m.CustomControlComponent) },
  { path: 'compat-form', loadComponent: () => import('./sections/compat-form/compat-form.component').then(m => m.CompatFormComponent) },
  { path: 'zoneless', loadComponent: () => import('./sections/zoneless/zoneless.component').then(m => m.ZonelessComponent) },
  { path: 'angular-aria', loadComponent: () => import('./sections/angular-aria/angular-aria.component').then(m => m.AngularAriaComponent) },
  { path: 'angular-mcp', loadComponent: () => import('./sections/angular-mcp/angular-mcp.component').then(m => m.AngularMcpComponent) },
  { path: 'tailwind', loadComponent: () => import('./sections/tailwind/tailwind.component').then(m => m.TailwindComponent) },
  { path: 'control-flow', loadComponent: () => import('./sections/control-flow/control-flow.component').then(m => m.ControlFlowComponent) },
  { path: '**', redirectTo: 'intro' }
];
