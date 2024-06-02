import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtTecladoTb2Page } from './rt-teclado-tb2.page';

const routes: Routes = [
  {
    path: '',
    component: RtTecladoTb2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtTecladoTb2PageRoutingModule {}
