import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const DEMO_APP_ROUTES: Routes = [
  { path: '', redirectTo: 'docs', pathMatch: 'full' },
  { path: 'grid', loadChildren: () => import('./grid/grid.module').then((m) => m.DocsGridModule) },
  {
    path: 'docs',
    loadChildren: () => import('./layout/layout.module').then((m) => m.DocsLayoutModule),
  },
  {
    path: 'responsive',
    loadChildren: () =>
      import('./responsive/responsive.module').then((m) => m.DocsResponsiveModule),
  },
  {
    path: 'issues',
    loadChildren: () =>
      import('./github-issues/github-issues.module').then((m) => m.DocsGithubIssuesModule),
  },
  {
    path: 'stackoverflow',
    loadChildren: () =>
      import('./stack-overflow/stack-overflow.module').then((m) => m.DocsStackOverflowModule),
  },
];

const routeOptions: ExtraOptions = {
  enableTracing: true,
  relativeLinkResolution: 'legacy',
};

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(DEMO_APP_ROUTES, routeOptions)],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
})
export class RoutingModule {}
