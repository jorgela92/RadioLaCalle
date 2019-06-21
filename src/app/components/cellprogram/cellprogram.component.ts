import {Component, Input, OnInit} from '@angular/core';
import {RadioProgram} from '../../app.component';
import {Router} from '@angular/router';
import {DataEntity} from '../../model/playlists';
import {MixcloundService} from '../../services/mixclound.service';

@Component({
  selector: 'app-cellprogram',
  templateUrl: './cellprogram.component.html',
  styleUrls: ['./cellprogram.component.css']
})
export class CellprogramComponent implements OnInit {
  @Input() itemProgram: DataEntity;

  constructor(private mixclound: MixcloundService, private router: Router) {}

  ngOnInit() {
  }

  onclick(): void {
    // if (this.itemProgram.programs.length > 0) {
     // this.router.navigate(['episodes'], {queryParams: {id: this.itemProgram.id}});
   // }
  }
}

