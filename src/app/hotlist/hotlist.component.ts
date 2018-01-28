import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

// Services
import { HotendsService } from '../hotservices/hotends.service';

@Component({
  selector: 'app-hotlist',
  templateUrl: './hotlist.component.html',
  styleUrls: ['./hotlist.component.css']
})
export class HotlistComponent implements OnInit {
    hype: string;
    hotendsObs: Observable<any>;

    constructor(
	public hotends: HotendsService,
	private _route: ActivatedRoute,
	private _router: Router
    ) { }
    
    ngOnInit() {
	if (this._route.snapshot.paramMap.get('hypename')) {
	    this.hype = this._route.snapshot.paramMap.get('hypename');
	    this.hotendsObs = this.hotends.retrieveHotends(this.hype);
	}
    }
}
