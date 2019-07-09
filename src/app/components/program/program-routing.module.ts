import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProgramComponent} from './program.component';


const routes: Routes = [
  {path: '', component: ProgramComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})

export class ProgramRoutingModule {}
