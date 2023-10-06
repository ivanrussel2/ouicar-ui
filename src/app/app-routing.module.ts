import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'admin', loadChildren:()=>import('./modules/admin/admin-routing.module')
  .then(m=>m.AdminRoutingModule)},
  {path:'',component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
