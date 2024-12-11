import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nombreUsuario= 'Alumno';

  constructor(private router: Router) { }

  ngOnInit() {

  }

  cerrarSesion() {
    this.router.navigate(['/ingresousuario']);
  }
}
