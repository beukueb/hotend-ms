import { InputType } from '../hotservices/primitives';
import { InputObject } from '../hotservices/hotends';
import { HotendsService } from '../hotservices/hotends.service';
import { javascriptPrimitives,htmlPrimitives } from '../hotservices/primitives';

export class Hotend {
    fieldsetList: any[][];
    fieldsetNames: string[];
    dataTree: any;

    constructor (
	public name: string,
	public hype: InputObject,
	public hotends: HotendsService
    ) {
	if (! this.name) {
	    // Initialize empty fieldsetList and dataTree
	    this.fieldsetList = [[]];
	    this.fieldsetNames = [hype['name']];
	    this.dataTree = Object();
	    this.dataTree[hype['name']] = Object();
	    // Construct fieldsetList and dataTree based on the hype
	    this.hyperate(this.hype,this.dataTree[hype['name']],0);
	} else {
	    hotends.retrieveHotend(this.hype['name'],this.name).subscribe(
		d => {
		    this.dataTree = d;
		    console.log(this.dataTree);
	    });
	    console.log('Retrieving',this.name,this.dataTree);
	}
    }

    hyperate(
	hype: InputObject,
	parent: Object,
	level: number
    ) { // iterate over the hype definition to construct the content
	for (let input of hype['inputs']) {
	    if (input['primitive']) {
		parent[input['name']] = [{'value': new javascriptPrimitives[htmlPrimitives[input['hype']]['js']] }];//String()];
		this.fieldsetList[this.fieldsetList.length-1].push([
		    input['name'],
		    input['hype'],
		    parent[input['name']],
		    input['quantity'],
		    a => a.push({'value': new javascriptPrimitives[htmlPrimitives[input['hype']]['js']] })
		]);
	    } else {
		parent[input['name']] = Object();
		this.fieldsetList.push([]);
		this.fieldsetNames.push(input['hype']);
		this.hyperate(
		    this.hotends.hobjectdefList[this.hotends.hobjectdefMap.indexOf(input["hype"])],
		    parent[input['name']],
		    level+1
		);
	    }
	}
    }

    submitHotend() {
	this.hotends.addHotend(this.hype['name'],this.name,this.dataTree);
	console.log(this.dataTree);
    }
}
