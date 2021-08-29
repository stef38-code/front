import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {MembreComponent} from './core/membre/membre.component';
import {MembreViewComponent} from './views/membre-view/membre-view.component';

const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'membre',
    component: MembreComponent,
    children: [{
      path: 'liste',
      component: MembreViewComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
