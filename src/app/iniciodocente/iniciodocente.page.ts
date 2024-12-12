
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-iniciodocente',
  templateUrl: './iniciodocente.page.html',
  styleUrls: ['./iniciodocente.page.scss'],
})
export class IniciodocentePage implements OnInit {
  nombreDocente= 'Docente';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  cerrarSesion() {
    this.router.navigate(['/ingresousuario']);
  }
}

