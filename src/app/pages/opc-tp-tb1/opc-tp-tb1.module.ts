import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcTpTb1PageRoutingModule } from './opc-tp-tb1-routing.module';

import { OpcTpTb1Page } from './opc-tp-tb1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcTpTb1PageRoutingModule
  ],
  declarations: [OpcTpTb1Page]
})
export class OpcTpTb1PageModule {}
