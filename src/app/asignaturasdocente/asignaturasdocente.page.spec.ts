import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturasdocentePage } from './asignaturasdocente.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing'; // Si se usa enrutamiento en el componente
import { IonicStorageModule } from '@ionic/storage-angular';
describe('AsignaturasdocentePage', () => {
  let component: AsignaturasdocentePage;
  let fixture: ComponentFixture<AsignaturasdocentePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsignaturasdocentePage], // Declara el componente a probar
      imports: [
        HttpClientModule, // Importa HttpClient para las peticiones HTTP
        RouterTestingModule,
        IonicStorageModule.forRoot(), // Importa el módulo de pruebas para enrutamiento
      ],
    }).compileComponents(); // Compila el módulo de prueba

    fixture = TestBed.createComponent(AsignaturasdocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
