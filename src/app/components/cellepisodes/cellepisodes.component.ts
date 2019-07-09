import {Component, Input, OnInit} from '@angular/core';
import {DataEntity} from '../../model/model';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-cellepisodes',
  templateUrl: './cellepisodes.component.html',
  styleUrls: ['./cellepisodes.component.css']
})

export class CellepisodesComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input() itemEpisode: DataEntity;
  private urlWidget = 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&hide_artwork=1&feed=%2F';
  constructor() {}

  ngOnInit(): void {}

  getUrl(): string {
    let slug = '';
    if (this.itemEpisode != null) { slug = this.itemEpisode.slug.replace('ñ', '%C3%B1'); }
    return this.urlWidget + this.itemEpisode.user.username + '%2F' + slug + '%2F';
  }

  getFormat(): string {
    return formatDate(new Date(this.itemEpisode.created_time), 'dd MMMM yyyy HH:mm', 'en');
  }
}

