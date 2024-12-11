import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroAsistenciaPageRoutingModule } from './registro-asistencia-routing.module';

import { RegistroAsistenciaPage } from './registro-asistencia.page';
import { QrCodeModule } from 'ng-qrcode';

import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroAsistenciaPageRoutingModule,
    QrCodeModule
  ],
  declarations: [RegistroAsistenciaPage, BarcodeScanningModalComponent]
})
export class RegistroAsistenciaPageModule {}
