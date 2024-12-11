import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresousuarioPageRoutingModule } from './ingresousuario-routing.module';

import { IngresousuarioPage } from './ingresousuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresousuarioPageRoutingModule
  ],
  declarations: [IngresousuarioPage]
})
export class IngresousuarioPageModule {}
