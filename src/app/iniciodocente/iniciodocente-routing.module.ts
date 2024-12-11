
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciodocentePage } from './iniciodocente.page';

const routes: Routes = [
  {
    path: '',
    component: IniciodocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciodocentePageRoutingModule {}

