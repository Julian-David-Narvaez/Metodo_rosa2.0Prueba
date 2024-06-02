import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcRtTb2Page } from './opc-rt-tb2.page';

const routes: Routes = [
  {
    path: '',
    component: OpcRtTb2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcRtTb2PageRoutingModule {}
