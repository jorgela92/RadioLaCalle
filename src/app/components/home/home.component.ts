import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: '' +
    '<div class = "box box1">\n' +
    '  <div class="container-fluid" style="padding-bottom: 10px;">\n' +
    '    <button class="btn btn-secondary shadow-sm p-1" style="font-size: 1vw;" (click)="onclick()" data-toggle="tooltip" title="Programas">Programas</button>\n' +
    '  </div>\n' +
    '</div>',
  styles: []
})

export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  onclick() {
    this.router.navigate(['programs']);
  }

}
