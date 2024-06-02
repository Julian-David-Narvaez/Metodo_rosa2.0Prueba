import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { STrabajoTb3Page } from './s-trabajo-tb3.page';

const routes: Routes = [
  {
    path: '',
    component: STrabajoTb3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class STrabajoTb3PageRoutingModule {}
