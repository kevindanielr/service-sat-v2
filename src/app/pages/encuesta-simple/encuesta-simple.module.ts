import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncuestaSimplePageRoutingModule } from './encuesta-simple-routing.module';

import { EncuestaSimplePage } from './encuesta-simple.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncuestaSimplePageRoutingModule
  ],
  declarations: [EncuestaSimplePage]
})
export class EncuestaSimplePageModule {}
