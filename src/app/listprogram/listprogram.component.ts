import { Component, OnInit } from '@angular/core';
import {Program} from '../app.component';

@Component({
  selector: 'app-listprogram',
  templateUrl: './listprogram.component.html',
  styleUrls: ['./listprogram.component.css']
})
export class ListprogramComponent implements OnInit {
  programObject: Program = new Program();
  listItems: Program[] = [];
  constructor() {
  }

  ngOnInit() {
    this.programObject.titleProgram = 'titulo';
    this.programObject.subtitleProgram = 'subtitulo';
    this.programObject.imageProgram = 'image';
    for (let i = 0; i < 10; i++) {
      this.listItems.push(this.programObject);
    }
  }
}
