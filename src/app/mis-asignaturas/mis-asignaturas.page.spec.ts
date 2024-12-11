import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisAsignaturasPage } from './mis-asignaturas.page';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Si se usan formularios en el componente

describe('MisAsignaturasPage', () => {
  let component: MisAsignaturasPage;
  let fixture: ComponentFixture<MisAsignaturasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisAsignaturasPage],
      imports: [
        HttpClientModule,   // Necesario para peticiones HTTP
        IonicModule.forRoot(), // Para componentes de Ionic
        FormsModule,        // Si usas formularios en el componente
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MisAsignaturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
