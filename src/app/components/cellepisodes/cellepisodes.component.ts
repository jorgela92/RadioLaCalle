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
  url: string;
  constructor() {
  }

  ngOnInit(): void {
    this.url = this.itemProgram.mixcloud;
  }

  getFormat(): string {
    return formatDate(this.itemProgram.date.toDate(), 'dd MMMM yyyy HH:mm', 'en');
  }
}

