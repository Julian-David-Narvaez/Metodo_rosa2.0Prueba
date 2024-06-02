import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { STrabajoTb2Page } from './s-trabajo-tb2.page';

const routes: Routes = [
  {
    path: '',
    component: STrabajoTb2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class STrabajoTb2PageRoutingModule {}
