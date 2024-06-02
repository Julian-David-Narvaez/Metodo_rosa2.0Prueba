import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcSTb3Page } from './opc-s-tb3.page';

const routes: Routes = [
  {
    path: '',
    component: OpcSTb3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcSTb3PageRoutingModule {}
