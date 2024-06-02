import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtTecladoTb2PageRoutingModule } from './rt-teclado-tb2-routing.module';

import { RtTecladoTb2Page } from './rt-teclado-tb2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtTecladoTb2PageRoutingModule
  ],
  declarations: [RtTecladoTb2Page]
})
export class RtTecladoTb2PageModule {}
