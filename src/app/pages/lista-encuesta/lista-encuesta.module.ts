import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEncuestaPageRoutingModule } from './lista-encuesta-routing.module';

import { ListaEncuestaPage } from './lista-encuesta.page';
import { ComponentsModule } from 'src/app/components/components.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEncuestaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListaEncuestaPage]
})
export class ListaEncuestaPageModule {}
