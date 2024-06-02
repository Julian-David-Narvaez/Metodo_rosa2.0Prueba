import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcSTrabajoPageRoutingModule } from './opc-s-trabajo-routing.module';

import { OpcSTrabajoPage } from './opc-s-trabajo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcSTrabajoPageRoutingModule
  ],
  declarations: [OpcSTrabajoPage]
})
export class OpcSTrabajoPageModule {}
