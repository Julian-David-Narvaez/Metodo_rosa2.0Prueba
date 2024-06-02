import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcSTb2Page } from './opc-s-tb2.page';

const routes: Routes = [
  {
    path: '',
    component: OpcSTb2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcSTb2PageRoutingModule {}
