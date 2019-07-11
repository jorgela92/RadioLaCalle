import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {trigger, style, animate, transition, query, stagger} from '@angular/animations';
import {MixcloundService} from '../../services/mixclound.service';
import {Model} from '../../model/model';
import {Subscription, of} from 'rxjs';

@Component({
  selector: 'app-program',
  template: '' +
    '<div class="box box2">\n' +
    '    <div class="container" style="padding-bottom: 10px;">\n' +
    '        <button class="btn btn-secondary shadow-sm p-1" style="font-size: 1vw;" (click)="clickBack()" data-toggle="tooltip" title="Volver">Volver</button>\n' +
    '    </div>\n' +
    '    <div class="row" *ngIf="programs">\n' +
    '        <div class="col-xs-12 col-sm-6 col-md-6" *ngFor="let program of programs?.data" [@listStagger]="programsCount">\n' +
    '            <app-cellprogram [itemProgram]="program"></app-cellprogram>\n' +
    '        </div>\n' +
    '    </div>\n' +
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

export class ProgramComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  programs: Model;
  programsCount = 0;
  constructor(private dataService: MixcloundService, private router: Router) {}

  ngOnInit() {
    this.subscription = this.dataService.getPlayListsPrograms().subscribe( (result) => {
      of(result).subscribe( data => {
        this.programs = data;
        this.programsCount = data.data.length;
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  clickBack() {
    this.router.navigate(['home']);
  }
}
