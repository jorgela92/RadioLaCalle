import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MixcloundService} from '../../services/mixclound.service';
import {Model, DataEntity} from '../../model/model';
import {Subscription, of} from 'rxjs';

@Component({
  selector: 'app-cellprogram',
  template: '' +
    '<div class="card shadow p-0 mb-5 bg-white rounded" (click)="onclick()" data-toggle="tooltip" title="{{itemProgram.name}}">\n' +
    '  <picture>\n' +
    '    <source media="(min-width: 1400px)" data-srcset="extra_large" srcset="../../../assets/img/img-background.svg">\n' +
    '    <source media="(min-width: 700px)" data-srcset="large" srcset="../../../assets/img/img-background.svg">\n' +
    '    <source media="(min-width: 500px)" data-srcset="large" srcset="../../../assets/img/img-background.svg">\n' +
    '    <source media="(min-width: 300px)" data-srcset="large" srcset="../../../assets/img/img-background.svg">\n' +
    '    <img class="card-img-top img-responsive img-fluid" style="padding: auto; max-width:100%; width: 100%; height: auto;" data-src="i1024wx1024h" src="../../../assets/img/img-background.svg" alt="...">\n' +
    '  </picture>\n' +
    '  <div class="card-body">\n' +
    '    <h5 class="card-title text-center" style="font-size: 2vw;">{{itemProgram.name}}</h5>\n' +
    '    <!--<p class="card-text pv-archiveText" style="font-size: 1vw;">{{itemEpisode.subtitleProgram}}</p>-->\n' +
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

export class CellprogramComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  @Input() itemProgram: DataEntity;
  cloudcasts: Model;

  constructor(private mixclound: MixcloundService, private router: Router) {}

  ngOnInit() {
    this.subscription = this.mixclound.getCloudcastsPrograms(this.itemProgram.slug).subscribe((result) => {
     of(result).subscribe(data => {
       this.cloudcasts = data;
     });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onclick(): void {
    if (this.cloudcasts.data.length > 0) {
      this.router.navigate(['episodes'], {queryParams: {id: this.itemProgram.slug}});
    }
  }
}

