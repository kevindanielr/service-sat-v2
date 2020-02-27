import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEncuestaPage } from './lista-encuesta.page';

const routes: Routes = [
  {
    path: '',
    component: ListaEncuestaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEncuestaPageRoutingModule {}
