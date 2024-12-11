import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroAsistenciaPage } from './registro-asistencia.page';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';
import { ModalController, AngularDelegate, IonicModule } from '@ionic/angular';
import { InjectionToken, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Crear el InjectionToken USERCONFIG
export const USERCONFIG = new InjectionToken('USERCONFIG', {
  providedIn: 'root',
  factory: () => ({})  // Aquí proporcionamos un valor vacío para USERCONFIG
});

describe('RegistroAsistenciaPage', () => {
  let component: RegistroAsistenciaPage;
  let fixture: ComponentFixture<RegistroAsistenciaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroAsistenciaPage],
      imports: [
        IonicStorageModule.forRoot(), // Inicializa Ionic Storage
        HttpClientModule, // Requerido por CrudService
        IonicModule.forRoot()  // Asegura que los componentes de Ionic se inicialicen correctamente
      ],
      providers: [
        ModalController,      // Proveer ModalController
        AngularDelegate,      // Proveer AngularDelegate
        { provide: USERCONFIG, useValue: {} }, // Proveer un valor vacío para USERCONFIG
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Añadir el esquema para permitir elementos personalizados
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
