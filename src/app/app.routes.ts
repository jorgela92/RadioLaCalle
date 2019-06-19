import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ListprogramComponent} from './components/listprogram/listprogram.component';
import {ListepisodesComponent} from './components/listepisodes/listepisodes.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent, data: {animation: 'Home'}},
  {path: 'programs', component: ListprogramComponent, data: {animation: 'Programs'}},
  {path: 'episodes', component: ListepisodesComponent, data: {animation: 'Episodes'}},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
