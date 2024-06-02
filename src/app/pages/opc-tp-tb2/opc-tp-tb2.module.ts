import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcTpTb2PageRoutingModule } from './opc-tp-tb2-routing.module';

import { OpcTpTb2Page } from './opc-tp-tb2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcTpTb2PageRoutingModule
  ],
  declarations: [OpcTpTb2Page]
})
export class OpcTpTb2PageModule {}
