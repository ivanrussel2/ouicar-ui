import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHeaderComponent } from './user-header/user-header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { BankAccountComponent } from './components/bank-account/bank-account.component';


@NgModule({
  declarations: [
    UserHeaderComponent,
    ProfileComponent,
    BankAccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ]
})
export class UserModule { }
