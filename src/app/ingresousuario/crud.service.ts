import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

export interface Usuario {
  id: string;
  username: string;
  password: string;
  role: string;
}
export interface UsuarioActual {
  id: string;
  username: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = 'http://192.168.100.12:3001';

  private storage: Storage | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private platform: Platform,
    private storageService: Storage
  ) {
    this.init();
  }

  private async init() {
    await this.storageService.create();
  }

  private isMobile(): boolean {
    return this.platform.is('android');
  }

  verificarCredenciales(username: string, password: string): Observable<Usuario | undefined> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuarios`).pipe(
      map(usuarios => {
        const usuarioEncontrado = usuarios.find(u =>
          u.username === username && u.password === password
        );
        if (usuarioEncontrado) {
          this.guardarDatosUsuario(usuarioEncontrado);
        }
        return usuarioEncontrado;
      })
    );
  }

  async guardar(id: string, valor: any) {
    localStorage.setItem(id, JSON.stringify(valor));
  }

  async leer(id: string) {
    const temp = localStorage.getItem(id);
    return temp ? JSON.parse(temp) : null;
  }

  async listar() {
    const listado: any[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      listado[i] = JSON.parse("" + localStorage.getItem("" + localStorage.key(i)));
    }
    return listado;
  }

  private guardarDatosUsuario(usuario: Usuario) {
    const datosParaGuardar: UsuarioActual = {
      id: usuario.id,
      username: usuario.username,
      role: usuario.role
    };
    localStorage.setItem('usuario_actual', JSON.stringify(datosParaGuardar));
  }

  verificarContraseña(username: string, password: string): Observable<Usuario | undefined> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuarios`).pipe(
      map(usuarios => usuarios.find(u =>
        u.username === username && u.password === password
      ))
    );
  }

  actualizarContraseña(userId: string, nuevaContraseña: string): Observable<Usuario> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuarios`).pipe(
      switchMap(usuarios => {
        const usuario = usuarios.find(u => u.id === userId);
        if (!usuario) {
          throw new Error('Usuario no encontrado');
        }
        const usuarioActualizado = {
          ...usuario,
          password: nuevaContraseña
        };
        return this.http.put<Usuario>(
          `${this.apiUrl}/usuarios/${userId}`,
          usuarioActualizado
        );
      })
    );
  }

  obtenerUsuarioActual(): UsuarioActual | null {
    const temp = localStorage.getItem('usuario_actual');
    return temp ? JSON.parse(temp) : null;
  }

  haySesionActiva(): boolean {
    return localStorage.getItem('usuario_actual') !== null;
  }

  getAsignaturas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/asignaturas`);
  }

  registrarAsistencia(fechaHora: string, clase: string, estado: string): Observable<any> {
    const data = { fechaHora, clase, estado };
    return this.http.post<any>(`${this.apiUrl}/registrar-asistencia`, data);
  }

  agregarAsistencia(lista: string, nuevaAsistencia: any): Observable<any> {
    return new Observable((observer) => {
        let asistencias = JSON.parse(localStorage.getItem(lista) || '[]');
        asistencias.push(nuevaAsistencia);
        localStorage.setItem(lista, JSON.stringify(asistencias));
        observer.next(asistencias);
        observer.complete();
    });
}
}
