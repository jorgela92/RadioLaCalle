import {Component, Input, OnInit} from '@angular/core';
import {RadioProgram} from '../app/app.component';


@Component({
  selector: 'app-cellprogram',
  templateUrl: './cellprogram.component.html',
  styleUrls: ['./cellprogram.component.css']
})
export class CellprogramComponent implements OnInit {
  @Input() itemProgram: RadioProgram;
  constructor() { }

  ngOnInit() {
  }

}
