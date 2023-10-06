import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'user',pathMatch:'full'},
  {path:'user', loadChildren:()=>import('./user/user-routing.module')
    .then(m=>m.UserRoutingModule) },
  {path:'car', loadChildren:()=>import('./car/car-routing.module')
    .then(m=>m.CarRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
