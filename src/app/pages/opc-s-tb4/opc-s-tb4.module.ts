import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcSTb4PageRoutingModule } from './opc-s-tb4-routing.module';

import { OpcSTb4Page } from './opc-s-tb4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcSTb4PageRoutingModule
  ],
  declarations: [OpcSTb4Page]
})
export class OpcSTb4PageModule {}
