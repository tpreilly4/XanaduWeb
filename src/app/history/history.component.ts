
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: any[];

  constructor(db: AngularFireDatabase) {
    db.list('/courses').valueChanges()
      .subscribe(historyItem => {
        this.history = historyItem;
        console.log(this.history)
      })
  }

  ngOnInit() {
  }

}
