import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcTpTb1Page } from './opc-tp-tb1.page';

const routes: Routes = [
  {
    path: '',
    component: OpcTpTb1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcTpTb1PageRoutingModule {}
