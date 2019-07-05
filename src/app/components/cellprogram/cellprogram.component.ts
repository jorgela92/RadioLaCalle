import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MixcloundService} from '../../services/mixclound.service';
import {Model, DataEntity} from '../../model/model';
import {Subscription, of} from 'rxjs';

@Component({
  selector: 'app-cellprogram',
  templateUrl: './cellprogram.component.html',
  styleUrls: ['./cellprogram.component.css']
})

export class CellprogramComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  @Input() listObject: DataEntity;
  cloudcasts: Model;

  constructor(private mixclound: MixcloundService, private router: Router) {}

  ngOnInit() {
    this.subscription = this.mixclound.getCloudcastsPrograms(this.listObject.slug).subscribe((result) => {
     of(result).subscribe(data => {
       this.cloudcasts = data;
     });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onclick(): void {
    if (this.cloudcasts.data.length > 0) {
      this.router.navigate(['episodes'], {queryParams: {id: this.listObject.slug}});
    }
  }
}

