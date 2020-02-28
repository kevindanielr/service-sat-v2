import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncuestaSimplePage } from './encuesta-simple.page';

const routes: Routes = [
  {
    path: '',
    component: EncuestaSimplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncuestaSimplePageRoutingModule {}
