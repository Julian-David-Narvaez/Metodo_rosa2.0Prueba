import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { STrabajoPage } from './s-trabajo.page';

const routes: Routes = [
  {
    path: '',
    component: STrabajoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class STrabajoPageRoutingModule {}
