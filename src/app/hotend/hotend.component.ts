import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { InputObject } from '../hotservices/hotends';
import { Hotend } from './hotend';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import * as firebase from 'firebase/app';

// Services
import { PrimitivesService } from '../hotservices/primitives.service';
import { HotendsService } from '../hotservices/hotends.service';
import { RenderTemplateFunctionsService } from '../hotservices/render-template-functions.service';

@Component({
  selector: 'app-hotend',
  templateUrl: './hotend.component.html',
  styleUrls: ['./hotend.component.css']
})
export class HotendComponent implements OnInit {
    @Input() name: string;
    @Input() hype: InputObject; 
    @Input() edit: boolean;
    hotend: Hotend;
    hotendObs: Observable<any>;    // HTML input object instance
    hotendRef: AngularFireList<any>;
    
    constructor(
	public primitives: PrimitivesService,
	public hotends: HotendsService,
	private _renderService: RenderTemplateFunctionsService,
	private _db: AngularFireDatabase,
	private _route: ActivatedRoute,
	private _router: Router
    ) { }

    ngOnInit() {
	if (this._route.snapshot.paramMap.get('name')) {
	    this.name = this._route.snapshot.paramMap.get('name');
	    let hypename = this._route.snapshot.paramMap.get('hypename');
	    this.hype = this.hotends.hobjectdefList[
		this.hotends.hobjectdefMap.indexOf(hypename)];
	}
	/* above scheme will not work when jumping views from one hotend to another
	  this._route.paramMap
	    .switchMap((params: ParamMap) =>
		       this.name = params.get('name'));
	this._route.paramMap
	    .switchMap((params: ParamMap) =>
		       this.hype = this.hotends.hobjectdefList[
			   this.hotends.hobjectdefMap.indexOf(params.get('hypename'))]);*/
	this.hotend = new Hotend(this.name,this.hype,this.hotends);

    }
}
