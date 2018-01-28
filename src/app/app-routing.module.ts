import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Route components
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { HotendComponent } from './hotend/hotend.component';
import { HotlistComponent } from './hotlist/hotlist.component';
import { NavComponent } from './nav/nav.component';
import { siteroutes } from '../sites/default';

// site specific routes should be defined in ../sites/default.ts
const routes: Routes = siteroutes.concat([
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    { path: 'admin', component: AdminComponent },
    { path: 'hotend/:hypename/:name', component: HotendComponent },
    { path: 'hotend/:hypename', component: HotlistComponent },
    //{ path: '**', component: PageNotFoundComponent }
]);

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
