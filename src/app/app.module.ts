import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListprogramComponent } from './listprogram/listprogram.component';
import { CellprogramComponent } from './cellprogram/cellprogram.component';

@NgModule({
  declarations: [
    AppComponent,
    ListprogramComponent,
    CellprogramComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
