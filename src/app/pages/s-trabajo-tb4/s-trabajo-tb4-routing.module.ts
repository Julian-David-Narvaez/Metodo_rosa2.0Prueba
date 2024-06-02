import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { STrabajoTb4Page } from './s-trabajo-tb4.page';

const routes: Routes = [
  {
    path: '',
    component: STrabajoTb4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class STrabajoTb4PageRoutingModule {}
