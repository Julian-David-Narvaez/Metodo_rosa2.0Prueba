import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcSTb2PageRoutingModule } from './opc-s-tb2-routing.module';

import { OpcSTb2Page } from './opc-s-tb2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcSTb2PageRoutingModule
  ],
  declarations: [OpcSTb2Page]
})
export class OpcSTb2PageModule {}
