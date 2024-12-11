
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { QrdocentePageRoutingModule } from './qrdocente-routing.module';

import { QrdocentePage } from './qrdocente.page';
import { QrCodeModule } from 'ng-qrcode';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrdocentePageRoutingModule,
    QrCodeModule
  ],
  declarations: [QrdocentePage]
})
export class QrdocentePageModule {}
