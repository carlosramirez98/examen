import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-asignaturas',
  templateUrl: './mis-asignaturas.page.html',
  styleUrls: ['./mis-asignaturas.page.scss'],
})
export class MisAsignaturasPage implements OnInit {

  asignaturas = [
    {nombre: "Programacion Movil", seccion1: "PGY4121"},
    {nombre: "Base de datos", seccion2: "INI5111"},
    {nombre: "Arquitectura", seccion3: "CSY4111"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
