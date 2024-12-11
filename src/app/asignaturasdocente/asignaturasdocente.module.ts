
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturasdocentePageRoutingModule } from './asignaturasdocente-routing.module';

import { AsignaturasdocentePage } from './asignaturasdocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturasdocentePageRoutingModule
  ],
  declarations: [AsignaturasdocentePage]
})
export class AsignaturasdocentePageModule {}
