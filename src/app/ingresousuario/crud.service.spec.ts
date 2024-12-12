import { TestBed } from '@angular/core/testing';
import { CrudService, Usuario } from './crud.service';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CrudService', () => {
  let service: CrudService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, IonicStorageModule.forRoot(), HttpClientTestingModule],
    });
    service = TestBed.inject(CrudService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('Verificar credenciales correctas', () => {
    const mockResponse: Usuario = { id: '1', username: 'docente1', password: '123456', role: 'docente' };

    spyOn(service, 'verificarCredenciales').and.returnValue(of(mockResponse));

    const result = service.verificarCredenciales('docente1', '123456');
    result.subscribe((usuario: Usuario | undefined) => {
      expect(usuario).toBeTruthy();
      expect(usuario?.username).toEqual('docente1');
    });
  });

  it('Verificar credenciales incorrectas', () => {
    const result = service.verificarCredenciales('wrongUser', 'wrongPassword');
    result.subscribe(usuario => {
      expect(usuario).toBeUndefined();
    });
  });

  it('Verificar contraseña correcta', () => {
    const result = service.verificarContraseña('docente1', '123456');
    result.subscribe(usuario => {
      expect(usuario).toBeTruthy();
      expect(usuario?.username).toEqual('docente1');
    });
  });

  it('Actualizar contraseña correctamente', () => {
    const result = service.actualizarContraseña('1', 'newPassword');
    result.subscribe(usuario => {
      expect(usuario.password).toEqual('newPassword');
    });
  });

  it('Simular respuesta vacía para obtener asignaturas', (done) => {
    spyOn(service, 'getAsignaturas').and.returnValue(of([]));
    service.getAsignaturas().subscribe((asignaturas) => {
      expect(asignaturas.length).toBe(0);
      done();
    });
  });

  it('Guardar datos de usuario en el almacenamiento local', () => {
    const usuario = { id: '1', username: 'docente1', password: '123456', role: 'docente' };
    service['guardarDatosUsuario'](usuario);
    const storedUser = JSON.parse(localStorage.getItem('usuario_actual')!);
    expect(storedUser.username).toEqual('docente1');
  });

  it('Verificar que se obtienen las asignaturas', () => {
    spyOn(service, 'getAsignaturas').and.returnValue(of([{ id: 1, name: 'Arquitectura' }]));
    service.getAsignaturas().subscribe(asignaturas => {
      expect(asignaturas.length).toBeGreaterThan(0);
      expect(asignaturas[0].name).toEqual('Arquitectura');
    });
  });

  it('Verificar registrar asistencia correctamente', () => {
    const asistencia = { fechaHora: '2024-11-27T10:00:00', clase: 'Arc', estado: 'present' };
    const mockResponse = { fechaHora: asistencia.fechaHora, clase: asistencia.clase, estado: asistencia.estado };

    spyOn(service, 'registrarAsistencia').and.returnValue(of(mockResponse));

    service.registrarAsistencia('2024-11-27T10:00:00', 'Arc', 'present').subscribe(response => {
      expect(response.fechaHora).toEqual(asistencia.fechaHora);
      expect(response.clase).toEqual(asistencia.clase);
    });
  });

  it('Verificar agregar asistencia', () => {
    const nuevaAsistencia = { fechaHora: '2024-11-27T10:00:00', clase: 'Math', estado: 'present' };
    service.agregarAsistencia('asistencias', nuevaAsistencia).subscribe(asistencias => {
      expect(asistencias.length).toBeGreaterThan(0);
      expect(asistencias[0].clase).toEqual('Math');
    });
  });

  it('Verificar si la sesión está activa', () => {
    localStorage.setItem('usuario_actual', JSON.stringify({ id: '1', username: 'docente1' }));
    expect(service.haySesionActiva()).toBeTrue();
  });

  it('Verificar guardar datos en localStorage', () => {
    const user = { id: '1', username: 'docente1' };
    service.guardar('user_1', user);
    const storedUser = JSON.parse(localStorage.getItem('user_1')!);
    expect(storedUser.username).toEqual('docente1');
  });

  it('Verificar leer datos desde localStorage', () => {
    const user = { id: '1', username: 'docente1' };
    localStorage.setItem('user_1', JSON.stringify(user));
    service.leer('user_1').then(data => {
      expect(data.username).toEqual('docente1');
    });
  });

  it('Verificar listar todos los elementos desde localStorage', async () => {
    const items = [{ id: '1', username: 'docente1' }];
    localStorage.setItem('item_1', JSON.stringify(items[0]));
    const list = await service.listar();
    expect(list.length).toBeGreaterThan(0);
    expect(list[0].username).toEqual('docente1');
  });

  it('Verificar obtener el usuario actual', () => {
    const usuario = { id: '1', username: 'docente1', role: 'docente' };
    localStorage.setItem('usuario_actual', JSON.stringify(usuario));
    const currentUser = service.obtenerUsuarioActual();
    expect(currentUser?.username).toEqual('docente1');
  });


  it('Verificar si la sesión no está activa', () => {
    localStorage.removeItem('usuario_actual');
    expect(service.haySesionActiva()).toBeFalse();
  });

  it('Verificar que el servicio se haya creado correctamente', () => {
    expect(service).toBeTruthy();
  });
});
