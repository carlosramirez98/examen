import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiarclavePage } from './cambiarclave.page';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Si usa formularios en la página
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
describe('CambiarclavePage', () => {
  let component: CambiarclavePage;
  let fixture: ComponentFixture<CambiarclavePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CambiarclavePage], // Declara el componente a probar
      imports: [
        HttpClientModule, // Necesario para peticiones HTTP
        FormsModule,     // Si se usan formularios en el componente
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(), // Para componentes de Ionic
      ],
    }).compileComponents(); // Compila el módulo de prueba

    fixture = TestBed.createComponent(CambiarclavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
