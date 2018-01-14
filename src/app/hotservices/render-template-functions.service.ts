import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { RenderFunctionSource, basicRenderer } from './render-template-functions';

@Injectable()
export class RenderTemplateFunctionsService {
    connectedRef: any;
    renderSources: RenderFunctionSource[];
    hotRenderSources: Observable<any[]>;
    hotRenderSourcesRef: AngularFireList<any>;
    
    constructor(private _db: AngularFireDatabase) {
	this.connectedRef = _db.database.ref(".info/connected");
	this.renderSources = [];
	this.hotRenderSourcesRef = _db.list('template_render_functions');
	this.hotRenderSources = this.hotRenderSourcesRef.valueChanges();
	// If firebase table is empty, initialize
	this.hotRenderSources.subscribe(
	    v => {
		if (!v.length) this.hotRenderSourcesRef.push(basicRenderer);
	    }
	);
    }

    getRenderFunctions(): Observable<RenderFunctionSource[]> {
	return this.connectedRef.on("value", snap => {
	    if (snap.val() === true) {
		// Return mapped observable
		return this.hotRenderSources.map(arr => {
		    // Put in local storage to prepare for offline state
		    localStorage.setItem('template_render_functions', JSON.stringify(arr));
		    //console.log(arr);
		    return arr.map(t => new RenderFunctionSource(t.name, t.source));
		});		
	    } else {
		console.log("not connected");
		let arr = JSON.parse(localStorage.getItem('template_render_functions'));
		return Observable.create(function(observer) { observer.next(arr); }).map(t => new RenderFunctionSource(t.name, t.source));
	    }
	});

	
    }
}
