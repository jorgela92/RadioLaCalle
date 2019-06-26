import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListprogramComponent } from './components/listprogram/listprogram.component';
import { CellprogramComponent } from './components/cellprogram/cellprogram.component';
import {FormsModule} from '@angular/forms';
import { ListepisodesComponent } from './components/listepisodes/listepisodes.component';
import { CellepisodesComponent } from './components/cellepisodes/cellepisodes.component';
import {APP_ROUTING} from './app.routes';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MixcloundService} from './services/mixclound.service';
import {SafePipe} from './components/cellepisodes/SafePipe';


@NgModule({
  declarations: [
    AppComponent,
    ListprogramComponent,
    CellprogramComponent,
    ListepisodesComponent,
    CellepisodesComponent,
    HomeComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [ MixcloundService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
