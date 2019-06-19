import { Component } from '@angular/core';
import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

import {slideInAnimation} from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})

export class AppComponent {
  title = 'Radio La Calle';
}

export class RadioProgram {
  id = '';
  titleProgram = '';
  subtitleProgram = '';
  imageProgram = '';
  programs = [];
}

export class RadioEpisodes {
  detail = '';
  image = '';
  name = '';
  date: Timestamp;
}
