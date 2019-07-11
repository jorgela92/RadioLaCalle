import {Component, Input, OnInit} from '@angular/core';
import {DataEntity} from '../../model/model';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-cellepisodes',
  template: '' +
    '<div class="card shadow p-0 mb-5 bg-white rounded">\n' +
    '  <p class="card-header text-right" style="padding: auto; background: white"><small class="text-muted pv-archiveText" style="font-size: 1vw; color: black">{{getFormat()}}</small></p>\n' +
    '  <picture>\n' +
    '    <source media="(min-width: 1400px)" data-srcset="{{itemEpisode?.pictures?.extra_large}}" srcset="../../../assets/img/img-background.svg">\n' +
    '    <source media="(min-width: 700px)" data-srcset="{{itemEpisode?.pictures?.large}}" srcset="../../../assets/img/img-background.svg">\n' +
    '    <source media="(min-width: 450px)" data-srcset="{{itemEpisode?.pictures?.large}}" srcset="../../../assets/img/img-background.svg">\n' +
    '    <source media="(min-width: 300px)" data-srcset="{{itemEpisode?.pictures?.large}}" srcset="../../../assets/img/img-background.svg">\n' +
    '    <img class="card-img-top img-responsive img-fluid" lazy-load style="padding: auto; max-width:100%; width: 100%; height: auto;" data-src={{itemProgram?.pictures?.i1024wx1024h}} src="../../../assets/img/img-background.svg" alt="...">\n' +
    '  </picture>\n' +
    '  <div class="card-body" style="padding: auto;">\n' +
    '    <h5 class="card-title text-center" style="font-size: 2vw; padding: auto;">{{itemEpisode?.name}}</h5>\n' +
    '    <!--<p class="card-text pv-archiveText" style="font-size: 1vw; padding: auto;">{{itemEpisode.detail}}</p>-->\n' +
    '  </div>\n' +
    '  <div class="card-footer" style="padding: auto">\n' +
    '    <iframe title="{{itemEpisode?.name}}" width="100%" height="60" [attr.src]="getUrl()| safe" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n' +
    '  </div>\n' +
    '</div>',
  styles: ['' +
  '.pv-archiveText {\n' +
  '  white-space: nowrap;\n' +
  '  text-overflow: ellipsis;\n' +
  '  color: black;\n' +
  '  overflow: hidden;\n' +
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

