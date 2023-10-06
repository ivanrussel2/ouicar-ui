import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarHeaderComponent } from './car-header/car-header.component';

const routes: Routes = [
  {path:'',component:CarHeaderComponent,outlet:'menu'},
  {path:'',redirectTo:'cars',pathMatch:'full'},
  {path:'cars',component:CarListComponent},
  {path:'car-detail',component:CarDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
