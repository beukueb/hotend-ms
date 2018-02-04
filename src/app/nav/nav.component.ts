import { Component, OnInit } from '@angular/core';
import { siteconfig } from '../../sites/default';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    title: string;
    fluidContainers: boolean;
    navpages: string[][];
    
    constructor(public afAuth: AngularFireAuth) {
	this.title = siteconfig.title;
	this.fluidContainers = siteconfig.fluidContainers;
	this.navpages = siteconfig.navpages;
    }

    login() {
	this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    logout() {
	this.afAuth.auth.signOut();
    }
    
    ngOnInit() {
    }

}
