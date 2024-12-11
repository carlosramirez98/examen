import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'ingresousuario',
    pathMatch: 'full'
  },
  {
    path: 'ingresousuario',
    loadChildren: () => import('./ingresousuario/ingresousuario.module').then( m => m.IngresousuarioPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'mis-asignaturas',
    loadChildren: () => import('./mis-asignaturas/mis-asignaturas.module').then( m => m.MisAsignaturasPageModule)
  },
  {
    path: 'mi-asistencia',
    loadChildren: () => import('./mi-asistencia/mi-asistencia.module').then( m => m.MiAsistenciaPageModule)
  },
  {
    path: 'registro-asistencia',
    loadChildren: () => import('./registro-asistencia/registro-asistencia.module').then( m => m.RegistroAsistenciaPageModule)
  },
  {
    path: 'cambiarclave',
    loadChildren: () => import('./cambiarclave/cambiarclave.module').then( m => m.CambiarclavePageModule)
  },
  {
    path: 'iniciodocente',
    loadChildren: () => import('./iniciodocente/iniciodocente.module').then( m => m.IniciodocentePageModule)
  },
  {
    path: 'asignaturasdocente',
    loadChildren: () => import('./asignaturasdocente/asignaturasdocente.module').then( m => m.AsignaturasdocentePageModule)
  },
  {
    path: 'qrdocente/:id',
    loadChildren: () => import('./qrdocente/qrdocente.module').then( m => m.QrdocentePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
