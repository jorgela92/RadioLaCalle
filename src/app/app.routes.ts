import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ListprogramComponent} from './components/listprogram/listprogram.component';
import {ListepisodesComponent} from './components/listepisodes/listepisodes.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'programs', component: ListprogramComponent},
  {path: 'episodes', component: ListepisodesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
