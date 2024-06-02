import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtRatonTb1PageRoutingModule } from './rt-raton-tb1-routing.module';

import { RtRatonTb1Page } from './rt-raton-tb1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtRatonTb1PageRoutingModule
  ],
  declarations: [RtRatonTb1Page]
})
export class RtRatonTb1PageModule {}
