import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire'; // Firebase config
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { FormsModule } from '@angular/forms';
import {AppModule} from './app.module'; // For Cloud Firestore

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Import firebase
    AngularFirestoreModule // Import firestore
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Radio La Calle';
}

export class Program {
  titleProgram: string = null;
  subtitleProgram: string = null;
  imageProgram: string = null;
}
