import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TpTelefonoTb1PageRoutingModule } from './tp-telefono-tb1-routing.module';

import { TpTelefonoTb1Page } from './tp-telefono-tb1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TpTelefonoTb1PageRoutingModule
  ],
  declarations: [TpTelefonoTb1Page]
})
export class TpTelefonoTb1PageModule {}
