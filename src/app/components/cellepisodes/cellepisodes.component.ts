import {Component, Input, OnInit} from '@angular/core';
import {RadioProgram} from '../../app.component';

@Component({
  selector: 'app-cellepisodes',
  templateUrl: './cellepisodes.component.html',
  styleUrls: ['./cellepisodes.component.css']
})
export class CellepisodesComponent implements OnInit {
  @Input() itemProgram: RadioProgram;
  constructor() { }

  ngOnInit() {
  }

}
