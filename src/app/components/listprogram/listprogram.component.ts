import { Component, OnInit } from '@angular/core';
import {Program} from '../app/app.component';

// @ts-ignore
import admin from 'firebase';

export class ListprogramComponent implements OnInit {
  listItems: Program[] = [];
  constructor() {
  }

  ngOnInit() {
    admin.initializeApp({
      credential: admin.credential.applicationDefault()
    });
    const db = admin.firestore();
    db.collection('programs').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  }
}
