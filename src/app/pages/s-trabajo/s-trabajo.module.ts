import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { STrabajoPageRoutingModule } from './s-trabajo-routing.module';

import { STrabajoPage } from './s-trabajo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    STrabajoPageRoutingModule
  ],
  declarations: [STrabajoPage]
})
export class STrabajoPageModule {}
