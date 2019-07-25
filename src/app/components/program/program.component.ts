import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {trigger, style, animate, transition, query, stagger} from '@angular/animations';
import {MixcloundService} from '../../services/mixclound.service';
import {Model} from '../../model/model';
import {Subscription, of, Observable} from 'rxjs';

@Component({
  selector: 'app-program',
  template: '' +
    '<div class="box box2">' +
    '    <div class="container" style="padding-bottom: 10px;">' +
    '        <button class="btn btn-secondary shadow-sm p-1" style="font-size: 1vw;" (click)="clickBack()" data-toggle="tooltip" title="Volver">Volver</button>' +
    '    </div>' +
    '    <div class="row" *ngIf="programsObs | async as programs; else loading">' +
    '        <div class="col-xs-12 col-sm-6 col-md-6" *ngFor="let program of programs.data" [@listStagger]="programs.data.length">' +
    '            <app-cellprogram [itemProgram]="program"></app-cellprogram>' +
    '        </div>' +
    '    </div>' +
    '    <ng-template #loading>' +
    '        <div>Loading ...</div>' +
    '    </ng-template>' +
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

export class ProgramComponent implements OnInit {
  programsObs: Observable<Model>;

  constructor(private dataService: MixcloundService, private router: Router) {}

  ngOnInit() {
    this.programsObs = this.dataService.getPlayListsPrograms();
  }

  clickBack() {
    this.router.navigate(['home']);
  }
}
