import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TpPantallaTb2PageRoutingModule } from './tp-pantalla-tb2-routing.module';

import { TpPantallaTb2Page } from './tp-pantalla-tb2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TpPantallaTb2PageRoutingModule
  ],
  declarations: [TpPantallaTb2Page]
})
export class TpPantallaTb2PageModule {}
