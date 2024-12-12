
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../ingresousuario/crud.service';

@Component({
  selector: 'app-qrdocente',
  templateUrl: './qrdocente.page.html',
  styleUrls: ['./qrdocente.page.scss'],
})
export class QrdocentePage {

  asignaturaSeleccionada: any;

  constructor(private route: ActivatedRoute,private crudService:CrudService) {}

  ngOnInit() {
    const asignaturaId = this.route.snapshot.paramMap.get('id');

    this.crudService.getAsignaturas().subscribe(asignaturas => {

      this.asignaturaSeleccionada = asignaturas.find(asignatura => asignatura.id === asignaturaId);
    });
  }
}
