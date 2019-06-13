import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
}
