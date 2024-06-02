import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TpTelefonoTb1Page } from './tp-telefono-tb1.page';

const routes: Routes = [
  {
    path: '',
    component: TpTelefonoTb1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TpTelefonoTb1PageRoutingModule {}
