
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../ingresousuario/crud.service';
@Component({
  selector: 'app-asignaturasdocente',
  templateUrl: './asignaturasdocente.page.html',
  styleUrls: ['./asignaturasdocente.page.scss'],
})
export class AsignaturasdocentePage implements OnInit {
  asignaturas: any[] = [];
  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.getAsignaturas().subscribe((crud) => {
      this.asignaturas = crud;
    });

  }

}
