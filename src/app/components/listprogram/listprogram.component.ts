import { Component, OnInit } from '@angular/core';
import {RadioEpisodes, RadioProgram} from '../../app.component';
import {DatabaseService} from '../../services/database.service';
import {Router} from '@angular/router';
import {trigger, state, style, animate, transition, query, stagger} from '@angular/animations';
import {MixcloundService} from '../../services/mixclound.service';
import {Playlists} from '../../model/playlists';

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
  private playLists: Playlists;
  listItems: RadioProgram[] = [];
  constructor(public dataService: MixcloundService, private router: Router) {}
  /*constructor(public dataService: DatabaseService, private router: Router) {
    this.dataService.getPlayListsPrograms().subscribe((result) => {
      for (const doc of result.docs) {
        this.dataService.getProgram(doc.id).subscribe((resultP) => {
          const programObject: RadioProgram = new RadioProgram();
          programObject.id = doc.id;
          programObject.titleProgram = resultP.get('name') as string;
          programObject.subtitleProgram = resultP.get('detail') as string;
          programObject.imageProgram = resultP.get('image') as string;
          if (resultP.get('programs') != null) {
            for (const pro of resultP.get('programs')) {
              programObject.programs.push(pro.valueOf() as RadioEpisodes);
            }
          } else {
            programObject.programs = [];
          }
          this.listItems.push(programObject);
          });
      }
    });
  }*/

  ngOnInit() {
    this.dataService.getPlayListsPrograms().subscribe( (result) => {
      this.playLists = result as Playlists;
      // console.log(result.data);
    });
  }

  clickBack(): void {
    this.router.navigate(['home']);
  }
}
