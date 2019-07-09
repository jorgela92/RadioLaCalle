import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home', loadChildren: () => import('./components/home/home.module').then(mod => mod.HomeModule), data: {animation: 'Home'}},
  // tslint:disable-next-line:max-line-length
  {path: 'programs', loadChildren: () => import('./components/program/program.module').then(mod => mod.ProgramModule), data: {animation: 'Programs'}},
  // tslint:disable-next-line:max-line-length
  {path: 'episodes', loadChildren: () => import('./components/episodes/episodes.module').then(mod => mod.EpisodesModule), data: {animation: 'Episodes'}},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
