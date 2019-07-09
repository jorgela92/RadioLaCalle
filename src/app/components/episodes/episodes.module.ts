import { NgModule } from '@angular/core';
import {EpisodesComponent} from './episodes.component';
import {EpisodesRoutingModule} from './episodes-routing.module';
import {CellepisodesComponent} from '../cellepisodes/cellepisodes.component';
import {CommonModule} from '@angular/common';
import {SafePipe} from '../cellepisodes/SafePipe';

@NgModule({
  declarations: [
    EpisodesComponent,
    CellepisodesComponent,
    SafePipe
  ],
  imports: [
    EpisodesRoutingModule,
    CommonModule
  ],
  providers: []

})

export class EpisodesModule {}
