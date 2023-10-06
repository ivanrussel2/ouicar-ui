import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SousMenuComponent } from './sous-menu/sous-menu.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    SousMenuComponent
  ],
  exports:[HeaderComponent,MenuComponent,SousMenuComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
