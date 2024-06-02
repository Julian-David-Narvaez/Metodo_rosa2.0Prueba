import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { STrabajoTb3PageRoutingModule } from './s-trabajo-tb3-routing.module';

import { STrabajoTb3Page } from './s-trabajo-tb3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    STrabajoTb3PageRoutingModule
  ],
  declarations: [STrabajoTb3Page]
})
export class STrabajoTb3PageModule {}
