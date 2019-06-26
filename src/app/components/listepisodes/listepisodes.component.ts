import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {MixcloundService} from '../../services/mixclound.service';
import {Model} from '../../model/model';

@Component({
  selector: 'app-listepisodes',
  templateUrl: './listepisodes.component.html',
  styleUrls: ['./listepisodes.component.css'],
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

export class ListepisodesComponent implements OnInit, OnDestroy {
  private cloudcasts: Model;
  private sub: any;

  constructor(private route: ActivatedRoute, private mixclound: MixcloundService, private router: Router) {}

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.mixclound.getCloudcastsPrograms(params.id).subscribe((result) => {
        this.cloudcasts = result as Model;
        if (this.cloudcasts != null) {
          if (this.cloudcasts.data.length > 0 ) {
          this.cloudcasts.data.sort(function compare(val1, val2) {
              return new Date(val2.created_time).getTime() - new Date(val1.created_time).getTime();
            });
          }
        }
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  clickBack(): void {
    this.router.navigate(['programs']);
  }

  public getName(): string {
    return this.cloudcasts.name.replace('Cloudcasts in ', '');
  }
}
