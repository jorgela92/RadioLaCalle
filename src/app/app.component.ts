import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [style({ opacity: 0 })],
          { optional: true }
        ),
        query(
          ':leave',
          [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
          { optional: true }
        )
      ])
    ])
  ]
})

export class AppComponent {
  title = 'Radio La Calle';
  showLoadingIndicator = true;
  constructor(private router: Router) {
    this.router.events.subscribe( (routerEvent) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd) {
        this.showLoadingIndicator = false;
      }
    });
  }
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
