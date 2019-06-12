import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListprogramComponent } from '../listprogram/listprogram.component';
import { CellprogramComponent } from '../cellprogram/cellprogram.component';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {DatabaseService} from '../../services/database.service';

@NgModule({
  declarations: [
    AppComponent,
    ListprogramComponent,
    CellprogramComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [ DatabaseService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
