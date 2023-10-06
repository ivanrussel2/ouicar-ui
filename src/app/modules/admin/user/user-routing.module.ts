import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { BankAccountComponent } from './components/bank-account/bank-account.component';

const routes: Routes = [
  {path: '',component: UserHeaderComponent,outlet:'menu'},
  {path:'',redirectTo:'profile',pathMatch:'full'},
  {path:'profile',component:ProfileComponent},
  {path:'bank',component:BankAccountComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
