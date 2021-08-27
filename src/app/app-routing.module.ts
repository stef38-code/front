import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MembresListeComponent} from './membres/membres-liste/membres-liste.component';

const ROUTES: Routes = [
  { path: 'home',
    component: HomeComponent,
  },
  { path: 'membres',
    component: MembresListeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
