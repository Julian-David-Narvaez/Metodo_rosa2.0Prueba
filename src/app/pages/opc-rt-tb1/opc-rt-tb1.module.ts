import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcRtTb1PageRoutingModule } from './opc-rt-tb1-routing.module';

import { OpcRtTb1Page } from './opc-rt-tb1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcRtTb1PageRoutingModule
  ],
  declarations: [OpcRtTb1Page]
})
export class OpcRtTb1PageModule {}
