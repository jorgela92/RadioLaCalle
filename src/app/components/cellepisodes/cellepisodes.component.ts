import {Component, Input, OnInit} from '@angular/core';
import {DataEntity} from '../../model/model';

@Component({
  selector: 'app-cellepisodes',
  templateUrl: './cellepisodes.component.html',
  styleUrls: ['./cellepisodes.component.css']
})

export class CellepisodesComponent implements OnInit {
  @Input() private itemProgram: DataEntity;
  url: string;
  constructor() {
  }

  ngOnInit(): void {
    this.url = this.itemProgram.key;
  }

  getFormat(): string {
    return this.itemProgram.created_time;
    // return formatDate(this.itemProgram.created_time.toDate(), 'dd MMMM yyyy HH:mm', 'en');
  }
}

