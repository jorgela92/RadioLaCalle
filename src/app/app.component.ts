import { Component } from '@angular/core';
import {slideInAnimation} from './route-animation';

@Component({
  selector: 'app-root',
  template: '' +
    '<div class="container-fluid">\n' +
    '  <div class="container-fluid" [@routeAnimations]="o && o.activatedRouteData && o.activatedRouteData[\'animation\']">\n' +
    '    <router-outlet #o="outlet"></router-outlet>\n' +
    '  </div>\n' +
    '</div>',
  styles: [],
  animations: [ slideInAnimation ]
})

export class AppComponent {
  title = 'Radio La Calle';
}
