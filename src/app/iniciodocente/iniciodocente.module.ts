
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciodocentePageRoutingModule } from './iniciodocente-routing.module';

import { IniciodocentePage } from './iniciodocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciodocentePageRoutingModule
  ],
  declarations: [IniciodocentePage]
})
export class IniciodocentePageModule {}

