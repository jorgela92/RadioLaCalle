import {Component, Input, OnInit} from '@angular/core';
import {RadioEpisodes} from '../../app.component';
import {formatDate} from '@angular/common';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-cellepisodes',
  templateUrl: './cellepisodes.component.html',
  styleUrls: ['./cellepisodes.component.css']
})
export class CellepisodesComponent implements OnInit {
  @Input() itemProgram: RadioEpisodes;
  private loading = true;
  private controllerSrc: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnit() {
    this.controllerSrc = this.getSafeUrl(this.itemProgram.mixcloud);
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getFormat(): string {
    return formatDate(this.itemProgram.date.toDate(), 'dd MMMM yyyy HH:mm', 'en');
  }

  onLoad() {
    this.loading = false;
  }

  ngOnInit(): void {
  }
}
