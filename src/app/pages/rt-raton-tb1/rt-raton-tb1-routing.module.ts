import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtRatonTb1Page } from './rt-raton-tb1.page';

const routes: Routes = [
  {
    path: '',
    component: RtRatonTb1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtRatonTb1PageRoutingModule {}
