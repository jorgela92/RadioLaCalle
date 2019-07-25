import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MixcloundService} from '../../services/mixclound.service';
import {Model, DataEntity} from '../../model/model';
import {Subscription, of, Observable} from 'rxjs';

@Component({
  selector: 'app-cellprogram',
  template: '' +
    '<div class="card shadow p-0 mb-5 bg-white rounded" data-toggle="tooltip" title="{{itemProgram.name}}">' +
    '  <div *ngIf="programObs | async as program; else loading" (click)="onclick()">' +
    '    <picture>' +
    '      <source media="(min-width: 1400px)" data-srcset="extra_large" srcset="../../../assets/img/img-background.svg">' +
    '      <source media="(min-width: 700px)" data-srcset="large" srcset="../../../assets/img/img-background.svg">' +
    '      <source media="(min-width: 500px)" data-srcset="large" srcset="../../../assets/img/img-background.svg">' +
    '      <source media="(min-width: 300px)" data-srcset="large" srcset="../../../assets/img/img-background.svg">' +
    '      <img class="card-img-top img-responsive img-fluid" style="padding: auto; max-width:100%; width: 100%; height: auto;" data-src="i1024wx1024h" src="../../../assets/img/img-background.svg" alt="...">' +
    '    </picture>' +
    '    <div class="card-body">' +
    '      <h5 class="card-title text-center" style="font-size: 2vw;">{{program.name.replace("Cloudcasts in ", "")}}</h5>' +
    '      <!--<p class="card-text pv-archiveText" style="font-size: 1vw;">{{itemEpisode.subtitleProgram}}</p>-->' +
    '     </div>' +
    '  </div>'+
    '  <ng-template #loading>' +
    '    <div>Loading ...</div>' +
    '  </ng-template>' +
    '</div>',
  styles: ['' +
  '.pv-archiveText {' +
  '  white-space: nowrap;' +
  '  text-overflow: ellipsis;' +
  '  color: black;' +
  '  overflow: hidden;' +
  '}']
})

export class CellprogramComponent implements OnInit {
  @Input() itemProgram: DataEntity;
  programObs: Observable<Model>;

  constructor(private mixclound: MixcloundService, private router: Router) {}

  ngOnInit() {
    this.programObs =  this.mixclound.getCloudcastsPrograms(this.itemProgram.slug);
  }

  onclick(): void {
    this.programObs.subscribe((result) => {
      if (result.data.length > 0) {
        this.router.navigate(['episodes'], {queryParams: {id: this.itemProgram.slug}});
      }
    });
  }
}

