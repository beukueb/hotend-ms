import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { htmlPrimitives } from './primitives';

@Injectable()
export class PrimitivesService {
    primitives: Observable<any>;    // HTML input primitives
    primitivesRef: AngularFireObject<any>;
    primitiveNames: String[];
    primitivesList: any;

    constructor(private _db: AngularFireDatabase) {
	this.primitivesList = [];
	this.primitiveNames = [];
	this.primitivesRef = _db.object('input_primitives');
	this.primitives = this.primitivesRef.valueChanges();
	
	// Check if the primitives are already defined in firebase
	this.primitives.subscribe(
	    v => {
		if (!v) this.primitivesRef.set(htmlPrimitives);
		this.primitivesList = Object.entries(v);
		this.primitiveNames = Object.keys(v);
	    }
	);
    }

}
