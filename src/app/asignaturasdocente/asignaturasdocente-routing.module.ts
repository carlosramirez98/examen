
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturasdocentePage } from './asignaturasdocente.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturasdocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturasdocentePageRoutingModule {}
