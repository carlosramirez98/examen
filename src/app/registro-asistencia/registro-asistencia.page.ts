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
  scanResult = ''; // Resultado del escaneo QR
  registroGuardado = '';

  constructor(
    private modalController: ModalController,
    private platform: Platform,
    private alertController: AlertController,
    private crudService: CrudService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.platform.is('capacitor')) {
      BarcodeScanner.isSupported().then();
      BarcodeScanner.checkPermissions().then();
      BarcodeScanner.removeAllListeners();
    }
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

  async registrarAsistencia() {
    if (this.scanResult) {
        const fechaActual = new Date().toLocaleDateString('es-ES', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        let nuevaAsistencia = { fecha: fechaActual, asistencia: "Presente, " + this.scanResult };

        let listaAsistencia = '';
        if (this.scanResult.includes("miercoles 13 de noviembre de 2024")) {
          this.router.navigate(['mi-asistencia', {int: this.scanResult}]);
        } else if (this.scanResult.includes("miercoles 13 de noviembre de 2024")) {
          this.router.navigate(['mi-asistencia', {int: this.scanResult}]);
        } else if (this.scanResult.includes("miercoles 13 de noviembre de 2024")) {
          this.router.navigate(['mi-asistencia', {int: this.scanResult}]);
        } else {
            const alert = await this.alertController.create({
                header: 'Error',
                message: 'Asignatura no reconocida en el QR.',
                buttons: ['OK']
            });
            await alert.present();
            return;
        }

        await this.crudService.agregarAsistencia(listaAsistencia, nuevaAsistencia);

        this.registroGuardado = `registrado como ${nuevaAsistencia.asistencia}`;
        this.scanResult = '';
    }
}
}
