import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresousuarioPage } from './ingresousuario.page';

const routes: Routes = [
  {
    path: '',
    component: IngresousuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresousuarioPageRoutingModule {}
