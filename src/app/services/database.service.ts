import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import QuerySnapshot = firebase.firestore.QuerySnapshot;
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;


@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  constructor(private db: AngularFirestore) {}

  getPrograms(): Observable < QuerySnapshot > {
    return this.db
      .collection('programs')
      .get();
  }

  getProgram(id: string): Observable < DocumentSnapshot > {
    return this.db
      .collection('programs')
      .doc(id)
      .get();
  }
}

