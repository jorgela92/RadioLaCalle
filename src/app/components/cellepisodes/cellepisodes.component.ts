import {Component, Input, OnInit} from '@angular/core';
import {DataEntity} from '../../model/model';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-cellepisodes',
  templateUrl: './cellepisodes.component.html',
  styleUrls: ['./cellepisodes.component.css']
})

export class CellepisodesComponent implements OnInit {
  @Input() private itemProgram: DataEntity;
  url: string;
  constructor() {}

  ngOnInit(): void {
    this.url = this.itemProgram.key;
  }

  getFormat(): string {
    return formatDate(new Date(this.itemProgram.created_time), 'dd MMMM yyyy HH:mm', 'en');
  }
}

