import {Component, OnDestroy, OnInit} from '@angular/core';
import {RadioEpisodes, RadioProgram} from '../../app.component';
import {DatabaseService} from '../../services/database.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-listepisodes',
  templateUrl: './listepisodes.component.html',
  styleUrls: ['./listepisodes.component.css'],
})

export class ListepisodesComponent implements OnInit, OnDestroy {
  private itemProgram: RadioProgram;
  private sub: any;
  loading = true;
  constructor(private router: Router, private route: ActivatedRoute, public dataService: DatabaseService) {}

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.dataService.getProgram(params.id).subscribe((resultP) => {
        const programObject: RadioProgram = new RadioProgram();
        programObject.id = this.route.snapshot.params.id;
        programObject.titleProgram = resultP.get('name') as string;
        programObject.subtitleProgram = resultP.get('detail') as string;
        programObject.imageProgram = resultP.get('image') as string;
        for (const pro of resultP.get('programs')) {
          programObject.programs.push(pro.valueOf() as RadioEpisodes);
        }
        programObject.programs.sort( function compare(val1, val2) {
          return val2.date.toDate().getTime() - val1.date.toDate().getTime();
        });
        this.itemProgram = programObject;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  clickBack(): void {
    this.router.navigate(['programs']);
  }

  onLoad() {
    this.loading = false;
  }
}
