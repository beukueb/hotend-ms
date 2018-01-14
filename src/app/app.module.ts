import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { siteconfig } from '../sites/default';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NavComponent } from './nav/nav.component';

// Hotservices
import { PrimitivesService } from './hotservices/primitives.service';
import { HotendsService } from './hotservices/hotends.service';
import { RenderTemplateFunctionsService } from './hotservices/render-template-functions.service';
import { HotendComponent } from './hotend/hotend.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'admin', component: AdminComponent },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    NavComponent,
    HotendComponent
  ],
  imports: [
      BrowserModule,
      AngularFireModule.initializeApp(siteconfig["firebase"]),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      RouterModule.forRoot(appRoutes),
      FormsModule
  ],
  providers: [PrimitivesService,HotendsService,RenderTemplateFunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
