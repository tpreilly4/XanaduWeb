
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: any[];
  headerTitle = '...';

  constructor(db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    db.list('/courses').valueChanges()
      .subscribe(historyItem => {
        this.history = historyItem;
        console.log(this.history)
      })
  }

  login() {
    if (this.afAuth.auth.currentUser == null) {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(value => {
          this.headerTitle = this.afAuth.auth.currentUser.email;
        })
        .catch(err => {
          this.headerTitle = 'Something went wrong signing in the user!';
        });
    } else {
      this.headerTitle = 'User already signed in!';
    }
  }

  logout() {
    if (this.afAuth.auth.currentUser == null) {
      this.headerTitle = 'No user to sign out!';
    } else {
      this.afAuth.auth.signOut()
        .then(value => {
          this.headerTitle = 'User has signed out!';
        })
        .catch(err => {
          this.headerTitle = 'Something went wrong signing out the user!';
        });
    }
  }

  ngOnInit() {
    if (this.afAuth.auth.currentUser == null) {
      this.headerTitle = 'Please sign in!';
    } else {
      this.headerTitle = this.afAuth.auth.currentUser.email;
    }
  }

}
