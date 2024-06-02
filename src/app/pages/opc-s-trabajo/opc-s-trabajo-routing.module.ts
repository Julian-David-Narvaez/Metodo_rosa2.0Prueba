import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcSTrabajoPage } from './opc-s-trabajo.page';

const routes: Routes = [
  {
    path: '',
    component: OpcSTrabajoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcSTrabajoPageRoutingModule {}
