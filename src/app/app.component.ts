import { Component } from '@angular/core';

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
