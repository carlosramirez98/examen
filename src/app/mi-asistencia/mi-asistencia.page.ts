import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mi-asistencia',
  templateUrl: './mi-asistencia.page.html',
  styleUrls: ['./mi-asistencia.page.scss'],
})


export class MiAsistenciaPage implements OnInit {

  valorParametro1: any;
  valorParametro2: any;
  valorParametro3: any;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

      this.valorParametro1 = this.activatedRoute.snapshot.paramMap.get("int");
      this.valorParametro2 = this.activatedRoute.snapshot.paramMap.get("int");
      this.valorParametro3 = this.activatedRoute.snapshot.paramMap.get("int");
  }
}
