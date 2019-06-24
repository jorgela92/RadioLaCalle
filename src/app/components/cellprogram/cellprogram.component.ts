import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MixcloundService} from '../../services/mixclound.service';
import {Model, DataEntity} from '../../model/model';

@Component({
  selector: 'app-cellprogram',
  templateUrl: './cellprogram.component.html',
  styleUrls: ['./cellprogram.component.css']
})

export class CellprogramComponent implements OnInit {
  @Input() private listObject: DataEntity;
  private cloudcasts: Model;

  constructor(private mixclound: MixcloundService, private router: Router) {}

  ngOnInit() {
    this.mixclound.getCloudcastsPrograms(this.listObject.slug).subscribe((result) => {
     this.cloudcasts = result as Model;
    });
  }

  onclick(): void {
    if (this.cloudcasts.data.length > 0) {
      this.router.navigate(['episodes'], {queryParams: {id: this.listObject.slug}});
    }
  }
}

