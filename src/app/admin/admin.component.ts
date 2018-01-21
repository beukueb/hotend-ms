import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { FormGroup, FormControl, Validators } from '@angular/forms';

// Services
import { PrimitivesService } from '../hotservices/primitives.service';
import { HotendsService } from '../hotservices/hotends.service';
import { RenderTemplateFunctionsService } from '../hotservices/render-template-functions.service';

import { javascriptPrimitives, htmlPrimitives, InputType } from '../hotservices/primitives';
import { InputObject } from '../hotservices/hotends';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    renderFunctions: any;
    
    constructor(public primitives: PrimitivesService, public hotends: HotendsService, private _renderService: RenderTemplateFunctionsService) { }

    ngOnInit() {
	console.log(this.hotends);
	this.renderFunctions = this._renderService.getRenderFunctions();
	//console.log(this.renderFunctions);
    }

}
