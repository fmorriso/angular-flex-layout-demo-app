import {NgModule} from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

const DEMO_APP_ROUTES: Routes = [
  {path: '', redirectTo: 'docs', pathMatch: 'full'},
  {path: 'grid', loadChildren: './grid/grid.module#DocsGridModule'},
  {path: 'docs', loadChildren: './layout/layout.module#DocsLayoutModule'},
  {path: 'responsive', loadChildren: './responsive/responsive.module#DocsResponsiveModule'},
  {path: 'issues', loadChildren: './github-issues/github-issues.module#DocsGithubIssuesModule'},
  {
    path: 'stackoverflow',
    loadChildren: './stack-overflow/stack-overflow.module#DocsStackOverflowModule'
  }
];

const routeOptions: ExtraOptions = {
  enableTracing: true
}

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(DEMO_APP_ROUTES, routeOptions)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class RoutingModule {}
