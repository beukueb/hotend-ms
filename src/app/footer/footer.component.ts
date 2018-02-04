import { Component, OnInit } from '@angular/core';
import { siteconfig } from '../../sites/default';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    title: string;
    fluidContainers: boolean;
    
    constructor() {
	this.title = siteconfig.title;
	this.fluidContainers = siteconfig.fluidContainers;
    }

    ngOnInit() {
    }

}
