import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CrudService } from '../ingresousuario/crud.service';
@Component({
  selector: 'app-cambiarclave',
  templateUrl: './cambiarclave.page.html',
  styleUrls: ['./cambiarclave.page.scss'],
})
export class CambiarclavePage implements OnInit {
  claveActual = '';
  nuevaClave = '';
  confirmarClave = '';
  usuarioActual: any;

  constructor(private alertController: AlertController, private crudService: CrudService,
    private router: Router) { }

    ngOnInit() {
      this.usuarioActual = this.crudService.obtenerUsuarioActual();
      console.log('Usuario actual:', this.usuarioActual);
      console.log('Hay sesión activa:', this.crudService.haySesionActiva());
      console.log('LocalStorage:', localStorage.getItem('usuario_actual'));
      if (!this.usuarioActual) {
        this.mostrarAlerta('No hay sesión activa');
        this.router.navigate(['/ingresousuario']);
      }
    }
  
    async cambiarClave() {
      if (!this.usuarioActual) {
        await this.mostrarAlerta('No hay sesión activa');
        return;
      }
  
      if (!this.validarEntradas()) {
        return;
      }
  
      this.crudService.verificarContraseña(this.usuarioActual.username, this.claveActual)
        .subscribe({
          next: async (usuario) => {
            if (!usuario) {
              await this.mostrarAlerta('La clave actual no es correcta');
              return;
            }
  
            this.crudService.actualizarContraseña(usuario.id, this.nuevaClave)
              .subscribe({
                next: async () => {
                  await this.mostrarAlerta('Contraseña actualizada exitosamente');
                  this.limpiarFormulario();
                },
                error: async (err) => {
                  console.error('Error al actualizar contraseña:', err);
                  await this.mostrarAlerta('Error al actualizar la contraseña');
                }
              });
          },
          error: async (err) => {
            console.error('Error al verificar contraseña:', err);
            await this.mostrarAlerta('Error al verificar la contraseña');
          }
        });
    }
  
    private validarEntradas(): boolean {
      if (!this.claveActual || !this.nuevaClave || !this.confirmarClave) {
        this.mostrarAlerta('Por favor, complete todos los campos');
        return false;
      }
  
      if (this.nuevaClave.length < 6) {
        this.mostrarAlerta('La nueva clave debe tener al menos 6 caracteres');
        return false;
      }
  
      if (this.nuevaClave !== this.confirmarClave) {
        this.mostrarAlerta('Las claves no coinciden');
        return false;
      }
  
      if (this.nuevaClave === this.claveActual) {
        this.mostrarAlerta('La nueva clave debe ser diferente a la actual');
        return false;
      }
  
      return true;
    }
  
    private limpiarFormulario() {
      this.claveActual = '';
      this.nuevaClave = '';
      this.confirmarClave = '';
    }
  
    private async mostrarAlerta(mensaje: string) {
      const alert = await this.alertController.create({
        header: 'Información',
        message: mensaje,
        buttons: ['OK']
      });
      await alert.present();
    }
  }