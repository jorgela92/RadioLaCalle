import { Component, OnInit } from '@angular/core';
import {RadioProgram} from '../../app.component';
import {DatabaseService} from '../../services/database.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listprogram',
  templateUrl: './listprogram.component.html',
  styleUrls: ['./listprogram.component.css']
})

export class ListprogramComponent implements OnInit {
  listItems: RadioProgram[] = [];
  constructor(public dataService: DatabaseService, private router: Router) {
    this.dataService.getPrograms().subscribe((result) => {
      for (const doc of result.docs) {
        this.dataService.getProgram(doc.id).subscribe((resultP) => {
          const programObject: RadioProgram = new RadioProgram();
          programObject.id = doc.id;
          programObject.titleProgram = resultP.get('name') as string;
          programObject.subtitleProgram = resultP.get('detail') as string;
          programObject.imageProgram = resultP.get('image') as string;
          this.listItems.push(programObject);
          });
      }
    });
  }

  ngOnInit() {
  }

  clickBack(): void {
    this.router.navigate(['home']);
  }
}
