import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire'; // Firebase config
import { AngularFirestoreModule } from '@angular/fire/firestore'; // For Cloud Firestore
import { environment } from 'src/environments/environment'; // Config

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Import firebase
    AngularFirestoreModule // Import firestore
  ],
  providers: []
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
