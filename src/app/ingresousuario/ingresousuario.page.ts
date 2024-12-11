import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CrudService } from '../ingresousuario/crud.service';
@Component({
  selector: 'app-ingresousuario',
  templateUrl: './ingresousuario.page.html',
  styleUrls: ['./ingresousuario.page.scss'],
})
export class IngresousuarioPage  {
  nombre = '';
  clave = '';
  constructor(private toastController: ToastController, private router: Router, private alertController: AlertController,private crudService: CrudService) { }


  async ingresar() {
    if (this.nombre && this.clave) {
      this.crudService.verificarCredenciales(this.nombre, this.clave).subscribe({
        next: (usuario) => {
          if (usuario) {
            this.nombre = '';
            this.clave = '';
            if (usuario.role === 'docente') {
              this.router.navigate(['/iniciodocente']);
            } else {
              this.router.navigate(['/inicio']);
            }
          } else {
            this.mostrarError('Credenciales incorrectas');
          }
        },
        error: (error) => {
          this.mostrarError('Error en el servidor');
        }
      });
    } else {
      this.mostrarError('Por favor, complete todos los campos');
    }
  }

  private async mostrarError(mensaje: string) {
    const alert = await this.alertController.create({
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  async restablecerclave() {
    const alerta = await this.alertController.create({
      header: 'Restablecer Clave',
      message: 'Se ha enviado un correo para restablecer la clave del usuario ${this.nombre}.',
      buttons: ['OK']
    });
    await alerta.present();
  }
}
