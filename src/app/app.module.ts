import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { SiteComponentsModule } from './site-components.module';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { siteconfig } from '../sites/default';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { HotendComponent } from './hotend/hotend.component';
import { HotlistComponent } from './hotlist/hotlist.component';
import { NavComponent } from './nav/nav.component';

// Hotservices
import { PrimitivesService } from './hotservices/primitives.service';
import { HotendsService } from './hotservices/hotends.service';
import { RenderTemplateFunctionsService } from './hotservices/render-template-functions.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    NavComponent,
    HotendComponent,
    FooterComponent,
    HotlistComponent
  ],
  imports: [
      BrowserModule,
      AngularFireModule.initializeApp(siteconfig["firebase"]),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      FormsModule,
      MarkdownModule.forRoot(),
      AppRoutingModule,
      SiteComponentsModule
  ],
  providers: [PrimitivesService,HotendsService,RenderTemplateFunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
