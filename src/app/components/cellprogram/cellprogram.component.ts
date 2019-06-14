import {Component, Input, OnInit} from '@angular/core';
import {RadioProgram} from '../../app.component';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cellprogram',
  templateUrl: './cellprogram.component.html',
  styleUrls: ['./cellprogram.component.css']
})
export class CellprogramComponent implements OnInit {
  @Input() itemProgram: RadioProgram;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onclick(): void {
    this.router.navigate(['episodes'], {queryParams: {id: this.itemProgram.id}});
  }
}
