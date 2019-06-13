import {Component, Input, OnInit} from '@angular/core';
import {RadioProgram} from '../../app.component';

@Component({
  selector: 'app-listepisodes',
  templateUrl: './listepisodes.component.html',
  styleUrls: ['./listepisodes.component.css']
})
export class ListepisodesComponent implements OnInit {
  @Input() itemProgram: RadioProgram;
  constructor() { }

  ngOnInit() {
  }

}
