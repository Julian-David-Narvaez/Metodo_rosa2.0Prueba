import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcTpTb2Page } from './opc-tp-tb2.page';

const routes: Routes = [
  {
    path: '',
    component: OpcTpTb2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcTpTb2PageRoutingModule {}
