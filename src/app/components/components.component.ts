import { GridComponent } from './grid/grid.component';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MenuListComponent} from './menu-list/menu-list.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    GridComponent,
    MenuListComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    GridComponent,
    MenuListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskIonicModule
  ]
})

export class ComponentsModule {}
