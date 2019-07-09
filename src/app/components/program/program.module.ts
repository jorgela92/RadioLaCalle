import {NgModule} from '@angular/core';
import {ProgramComponent} from './program.component';
import {ProgramRoutingModule} from './program-routing.module';
import {CellprogramComponent} from '../cellprogram/cellprogram.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ProgramComponent,
    CellprogramComponent
  ],
  imports: [
    ProgramRoutingModule,
    CommonModule
  ],
  providers: []
})

export class ProgramModule {}
