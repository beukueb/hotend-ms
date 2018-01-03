import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { siteconfig } from '../sites/default';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NavComponent } from './nav/nav.component';

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
    NavComponent
  ],
  imports: [
      BrowserModule,
      AngularFireModule.initializeApp(siteconfig["firebase"]),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
