import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcSTb3PageRoutingModule } from './opc-s-tb3-routing.module';

import { OpcSTb3Page } from './opc-s-tb3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcSTb3PageRoutingModule
  ],
  declarations: [OpcSTb3Page]
})
export class OpcSTb3PageModule {}
