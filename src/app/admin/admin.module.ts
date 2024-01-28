import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { IndexPageComponent } from './page/index-page/index-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    IndexPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
