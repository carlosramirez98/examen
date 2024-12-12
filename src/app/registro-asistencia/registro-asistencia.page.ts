import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { BarcodeScanner, LensFacing } from '@capacitor-mlkit/barcode-scanning';
import { CrudService } from '../ingresousuario/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.page.html',
  styleUrls: ['./registro-asistencia.page.scss'],
})
export class RegistroAsistenciaPage implements OnInit {
  scanResult = '';
  registroGuardado = '';
  usuarioActual: any;
  asignaturas: any[] = [];

  constructor(
    private modalController: ModalController,
    private platform: Platform,
    private alertController: AlertController,
    private crudService: CrudService,
    private router: Router
  ) { }

  async ngOnInit() {
    if (this.platform.is('capacitor')) {
      BarcodeScanner.isSupported().then();
      BarcodeScanner.checkPermissions().then();
      BarcodeScanner.removeAllListeners();
    }


    this.usuarioActual = this.crudService.obtenerUsuarioActual();


    this.crudService.getAsignaturas().subscribe(
      asignaturas => this.asignaturas = asignaturas
    );
  }

  async startScan() {
    const modal = await this.modalController.create({
      component: BarcodeScanningModalComponent,
      cssClass: 'barcode-scanning-modal',
      showBackdrop: false,
      componentProps: {
        formats: [],
        LensFacing: LensFacing.Back
      }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();

    if (data) {
      this.scanResult = data?.barcode?.displayValue;
    }
  }

  getCurrentDate(): string {
    return new Date().toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  async registrarAsistencia() {
    if (!this.scanResult) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, escanee un código QR primero.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }


    const asignaturaEscaneada = this.asignaturas.find(
      a => a.codigoqr === this.scanResult
    );

    if (!asignaturaEscaneada) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Asignatura no reconocida en el QR.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }


    if (asignaturaEscaneada.seccion !== "seccion 1") {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Solo puedes registrar asistencia en la sección 1.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const fechaActual = this.getCurrentDate();

    this.router.navigate(['mi-asistencia', {
      int: `Presente, ${fechaActual}`,
      asignatura: asignaturaEscaneada.nombre
    }]);

    const nuevaAsistencia = {
      fecha: fechaActual,
      asistencia: `Presente, ${fechaActual}`,
      asignatura: asignaturaEscaneada.nombre
    };

    await this.crudService.agregarAsistencia('asistencias', nuevaAsistencia);

    this.registroGuardado = `registrado como ${nuevaAsistencia.asistencia}`;
    this.scanResult = '';
  }
}
