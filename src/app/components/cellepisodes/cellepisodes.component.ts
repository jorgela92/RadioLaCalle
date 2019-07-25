import {Component, Input, OnInit} from '@angular/core';
import {DataEntity} from '../../model/model';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-cellepisodes',
  template: '' +
    '<div class="card shadow p-0 mb-5 bg-white rounded">' +
    '  <div *ngIf="itemEpisode as episode; else loading" (click)="onclick()">' +
    '     <p class="card-header text-right" style="padding: auto; background: white"><small class="text-muted pv-archiveText" style="font-size: 1vw; color: black">{{getFormat()}}</small></p>' +
    '     <picture>' +
    '       <source media="(min-width: 1400px)" data-srcset="{{itemEpisode?.pictures?.extra_large}}" srcset="../../../assets/img/img-background.svg">' +
    '       <source media="(min-width: 700px)" data-srcset="{{itemEpisode?.pictures?.large}}" srcset="../../../assets/img/img-background.svg">' +
    '       <source media="(min-width: 450px)" data-srcset="{{itemEpisode?.pictures?.large}}" srcset="../../../assets/img/img-background.svg">' +
    '       <source media="(min-width: 300px)" data-srcset="{{itemEpisode?.pictures?.large}}" srcset="../../../assets/img/img-background.svg">' +
    '       <img class="card-img-top img-responsive img-fluid" style="padding: auto; max-width:100%; width: 100%; height: auto;" [appLazySrc]="itemProgram?.pictures?.i1024wx1024h" lazySrcVisible="visible" src="../../../assets/img/img-background.svg" alt="...">' +
    '     </picture>' +
    '     <div class="card-body" style="padding: auto;">' +
    '       <h5 class="card-title text-center" style="font-size: 2vw; padding: auto;">{{episode.name}}</h5>' +
    '       <!--<p class="card-text pv-archiveText" style="font-size: 1vw; padding: auto;">{{itemEpisode.detail}}</p>-->' +
    '     </div>' +
    '     <div class="card-footer" style="padding: auto">' +
    '       <iframe title="{{episode.name}}" width="100%" height="60" [attr.src]="getUrl()| safe" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' +
    '     </div>' +
    '   </div>' +
    '   <ng-template #loading>' +
    '      <div>Loading ...</div>' +
    '   </ng-template>' +
    '</div>',
  styles: ['' +
  '.pv-archiveText {' +
  '  white-space: nowrap;' +
  '  text-overflow: ellipsis;' +
  '  color: black;' +
  '  overflow: hidden;' +
  '}' +
  '.img {' +
  '    height:480px;' +
  '}']
})

export class CellepisodesComponent implements OnInit {
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

