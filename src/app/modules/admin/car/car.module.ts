import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarHeaderComponent } from './car-header/car-header.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [
    CarListComponent,
    CarHeaderComponent,
    CarDetailComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    CoreModule
  ],
  exports:[CarListComponent]
})
export class CarModule { }
