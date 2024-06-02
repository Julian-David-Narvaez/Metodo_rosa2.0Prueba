import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TpPantallaTb2Page } from './tp-pantalla-tb2.page';

const routes: Routes = [
  {
    path: '',
    component: TpPantallaTb2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TpPantallaTb2PageRoutingModule {}
