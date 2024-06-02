import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { STrabajoTb2PageRoutingModule } from './s-trabajo-tb2-routing.module';

import { STrabajoTb2Page } from './s-trabajo-tb2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    STrabajoTb2PageRoutingModule
  ],
  declarations: [STrabajoTb2Page]
})
export class STrabajoTb2PageModule {}
