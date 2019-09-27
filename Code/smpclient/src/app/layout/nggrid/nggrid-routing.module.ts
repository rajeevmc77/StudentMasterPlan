import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsergridComponent} from './usergrid.component';

const routes: Routes = [
  {
      path: '',
      component: UsergridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NggridRoutingModule { }


