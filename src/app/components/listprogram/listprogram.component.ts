import { Component, OnInit } from '@angular/core';
import {RadioProgram, RadioProgramA} from '../app/app.component';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-listprogram',
  templateUrl: './listprogram.component.html',
  styleUrls: ['./listprogram.component.css']
})

export class ListprogramComponent implements OnInit {
  listItems: RadioProgram[] = [];
  constructor(public dataService: DatabaseService) {
    this.dataService.getPrograms().subscribe((result) => {
      for (const doc of result.docs) {
        this.dataService.getProgram(doc.id).subscribe((resultP) => {
          const programObject: RadioProgram = new RadioProgram();
          console.log(doc.data.name);
          programObject.titleProgram = resultP.get('name') as string;
          programObject.subtitleProgram = resultP.get('detail') as string;
          programObject.imageProgram = resultP.get('image') as string;
          for (const pro of resultP.get('programs')) {
            programObject.programs.push(pro.valueOf() as RadioProgramA);
          }
          this.listItems.push(programObject);
          });
      }
    });
  }

  ngOnInit() {
  }
}
