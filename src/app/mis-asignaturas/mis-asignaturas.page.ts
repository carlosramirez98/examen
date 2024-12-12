import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-asignaturas',
  templateUrl: './mis-asignaturas.page.html',
  styleUrls: ['./mis-asignaturas.page.scss'],
})
export class MisAsignaturasPage implements OnInit {

  asignaturas = [
    {nombre: "Programacion Movil", seccion1: "seccion 1"},
    {nombre: "Base de datos", seccion2: "seccion 1"},
    {nombre: "Arquitectura", seccion3: "seccion 1"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
