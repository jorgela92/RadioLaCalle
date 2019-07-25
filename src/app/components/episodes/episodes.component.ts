import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {MixcloundService} from '../../services/mixclound.service';
import {Model} from '../../model/model';
import {Subscription, of} from 'rxjs';

@Component({
  selector: 'app-episodes',
  template: '' +
    '<div class="box box3">' +
    '    <div class="container" style="padding-bottom: 10px;">' +
    '        <button class="btn btn-secondary shadow-sm p-1" style="font-size: 1vw;" (click)="clickBack()">Volver</button>' +
    '    </div>' +
    '    <div class="container-fluid" style="margin: auto">' +
    '      <picture>' +
    '        <source media="(min-width: 1400px)" data-srcset="extra_large" srcset="../../../assets/img/img-background.svg">' +
    '        <source media="(min-width: 700px)" data-srcset="large" srcset="../../../assets/img/img-background.svg">' +
    '        <source media="(min-width: 500px)" data-srcset="large" srcset="../../../assets/img/img-background.svg">' +
    '        <source media="(min-width: 300px)" data-srcset="large" srcset="../../../assets/img/img-background.svg">' +
    '        <img class="card-img-top img-responsive img-fluid" style="padding: auto; max-width:100%; width: 100%; height: auto;" [appLazySrc]="i1024wx1024h" src="../../../assets/img/img-background.svg" alt="...">' +
    '      </picture>' +
    '      <h4 class="text-center" style="font-size: 2vw; padding-top: auto;">{{name}}</h4>' +
    '        <!--<p class="text-center" style="font-size: 1vw;">{{episodes.name}}</p>-->' +
    '      <br>' +
    '    </div>' +
    '    <div class="row" *ngIf="episodes as listEpisodes; else loading" >' +
    '        <div class="col-xs-12 col-sm-6 col-md-6" *ngFor="let episode of listEpisodes.data" [@listStagger]="listEpisodes.data.length">' +
    '            <app-cellepisodes [itemEpisode]=episode></app-cellepisodes>' +
    '        </div>' +
    '    </div>' +
    '   <ng-template #loading>' +
    '      <div>Loading ...</div>' +
    '   </ng-template>' +
    '</div>',
  styles: [],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger('50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ], { optional: true }),
        query(':leave', animate('50ms', style({ opacity: 0 })), {optional: true})
      ])
    ])
  ],
})

export class EpisodesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  episodes: Model;
  name = '';

  constructor(private route: ActivatedRoute, private mixclound: MixcloundService, private router: Router) {}

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe(params => {
      of(params).subscribe(data => {
        this.subscription = this.mixclound.getCloudcastsPrograms(data.id).subscribe((result) => {
          of(result).subscribe(dataEpisode => {
            this.episodes = dataEpisode;
            if (this.episodes != null) {
              if (this.episodes.data.length > 0 ) {
                this.episodes.data.sort(function compare(val1, val2) {
                  return new Date(val2.created_time).getTime() - new Date(val1.created_time).getTime();
                });
              }
            }
          });
        });
        this.name = (data as Model).name;
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  clickBack() {
    this.router.navigate(['programs']);
  }
}
