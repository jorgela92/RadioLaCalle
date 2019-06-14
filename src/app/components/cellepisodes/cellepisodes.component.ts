import {Component, Input, OnInit} from '@angular/core';
import {RadioEpisodes} from '../../app.component';

@Component({
  selector: 'app-cellepisodes',
  templateUrl: './cellepisodes.component.html',
  styleUrls: ['./cellepisodes.component.css']
})
export class CellepisodesComponent implements OnInit {
  @Input() itemProgram: RadioEpisodes;
  constructor() { }

  ngOnInit() {
  }

}
