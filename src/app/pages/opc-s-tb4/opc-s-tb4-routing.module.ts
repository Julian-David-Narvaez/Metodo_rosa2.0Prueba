import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcSTb4Page } from './opc-s-tb4.page';

const routes: Routes = [
  {
    path: '',
    component: OpcSTb4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcSTb4PageRoutingModule {}
