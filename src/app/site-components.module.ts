import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { siteroutes } from '../sites/default';
import { HotendsService } from './hotservices/hotends.service';
import { BlogmsgComponent } from './sites/blogmsg/blogmsg.component';
import { BloglistComponent } from './sites/bloglist/bloglist.component';

@NgModule({
    imports: [
	CommonModule,
	MarkdownModule,
	RouterModule.forChild(siteroutes)
    ],
    exports: [
	RouterModule
    ],
    declarations: [ BlogmsgComponent, BloglistComponent ],
    providers: [ HotendsService ]
})
export class SiteComponentsModule { }
