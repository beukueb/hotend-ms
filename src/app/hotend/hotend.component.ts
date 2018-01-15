import { Component, OnInit, Input } from '@angular/core';
import { InputObject } from '../hotservices/hotends';

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
    @Input() hype: InputObject; 
    
    constructor(
	public primitives: PrimitivesService,
	public hotends: HotendsService,
	private _renderService: RenderTemplateFunctionsService
    ) { }

    ngOnInit() {
    }

}
