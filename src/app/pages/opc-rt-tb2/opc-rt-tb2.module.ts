import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcRtTb2PageRoutingModule } from './opc-rt-tb2-routing.module';

import { OpcRtTb2Page } from './opc-rt-tb2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcRtTb2PageRoutingModule
  ],
  declarations: [OpcRtTb2Page]
})
export class OpcRtTb2PageModule {}
