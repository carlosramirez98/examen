import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { RouterModule, Routes } from '@angular/router';
import { MiAsistenciaPage } from './mi-asistencia.page';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: MiAsistenciaPage,
  },
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)], // Agrega CommonModule aquí
  declarations: [MiAsistenciaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MiAsistenciaPageModule {}
