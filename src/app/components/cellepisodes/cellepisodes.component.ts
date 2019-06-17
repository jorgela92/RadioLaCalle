import {Component, Input, OnInit} from '@angular/core';
import {RadioEpisodes} from '../../app.component';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-cellepisodes',
  templateUrl: './cellepisodes.component.html',
  styleUrls: ['./cellepisodes.component.css']
})
export class CellepisodesComponent implements OnInit {
  @Input() itemProgram: RadioEpisodes;

  constructor() {}

  ngOnInit() {}

  getFormat(): string {
    return formatDate(this.itemProgram.date.toDate(), 'dd MMMM yyyy HH:mm', 'en');
  }
}
