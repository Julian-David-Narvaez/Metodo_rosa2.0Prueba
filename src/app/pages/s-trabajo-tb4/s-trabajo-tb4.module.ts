import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { STrabajoTb4PageRoutingModule } from './s-trabajo-tb4-routing.module';

import { STrabajoTb4Page } from './s-trabajo-tb4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    STrabajoTb4PageRoutingModule
  ],
  declarations: [STrabajoTb4Page]
})
export class STrabajoTb4PageModule {}
