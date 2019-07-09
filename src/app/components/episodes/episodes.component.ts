import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {MixcloundService} from '../../services/mixclound.service';
import {Model} from '../../model/model';
import {Subscription, of} from 'rxjs';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
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
  cloudcasts: Model;
  name = '';

  constructor(private route: ActivatedRoute, private mixclound: MixcloundService, private router: Router) {}

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe(params => {
      of(params).subscribe(data => {
        this.subscription = this.mixclound.getCloudcastsPrograms(data.id).subscribe((result) => {
          of(result).subscribe(dataEpisode => {
            this.cloudcasts = dataEpisode;
            if (this.cloudcasts != null) {
              if (this.cloudcasts.data.length > 0 ) {
                this.cloudcasts.data.sort(function compare(val1, val2) {
                  return new Date(val2.created_time).getTime() - new Date(val1.created_time).getTime();
                });
              }
            }
          });
        });
        this.name = (data as Model).name.replace('Cloudcasts in ', '');
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
