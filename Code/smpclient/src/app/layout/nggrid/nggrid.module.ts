import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { PageHeaderModule } from '../../shared';
import { NggridRoutingModule } from './nggrid-routing.module';

import {UsergridComponent} from './usergrid.component';

@NgModule({
  declarations: [UsergridComponent],
  imports: [
    CommonModule,
    NggridRoutingModule,
    PageHeaderModule,
    AgGridModule.withComponents([])
  ]
})
export class NggridModule {}

