import {Component, Input, OnInit} from '@angular/core';
import {DataEntity} from '../../model/model';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-cellepisodes',
  templateUrl: './cellepisodes.component.html',
  styleUrls: ['./cellepisodes.component.css']
})

export class CellepisodesComponent implements OnInit {
  @Input() itemProgram: DataEntity;
  url: string;
  constructor() {}

  ngOnInit(): void {
    this.url = this.itemProgram.key;
  }

  getUrl(): string {
    // tslint:disable-next-line:max-line-length
    return 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&hide_artwork=1&feed=%2F' + this.itemProgram.user.username + '%2F' + this.itemProgram.slug.replace('ñ', '%C3%B1') + '%2F';
  }

  getFormat(): string {
    return formatDate(new Date(this.itemProgram.created_time), 'dd MMMM yyyy HH:mm', 'en');
  }
}

