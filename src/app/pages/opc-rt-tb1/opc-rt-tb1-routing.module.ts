import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcRtTb1Page } from './opc-rt-tb1.page';

const routes: Routes = [
  {
    path: '',
    component: OpcRtTb1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcRtTb1PageRoutingModule {}
