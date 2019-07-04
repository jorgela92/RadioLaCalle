import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {trigger, style, animate, transition, query, stagger} from '@angular/animations';
import {MixcloundService} from '../../services/mixclound.service';
import {Model} from '../../model/model';

@Component({
  selector: 'app-listprogram',
  templateUrl: './listprogram.component.html',
  styleUrls: ['./listprogram.component.css'],
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

export class ListprogramComponent implements OnInit {
  playLists: Model;
  playListsCount = 0;
  constructor(private dataService: MixcloundService, private router: Router) {}

  ngOnInit() {
    this.dataService.getPlayListsPrograms().subscribe( (result) => {
      this.playLists = result;
      this.playListsCount = result.data.length;
    });
  }

  clickBack(): void {
    this.router.navigate(['home']);
  }
}
