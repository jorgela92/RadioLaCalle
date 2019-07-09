import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EpisodesComponent} from './episodes.component';


const routes: Routes = [
  {path: '', component: EpisodesComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})

export class EpisodesRoutingModule {}
