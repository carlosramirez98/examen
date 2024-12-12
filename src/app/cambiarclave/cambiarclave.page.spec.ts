import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiarclavePage } from './cambiarclave.page';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
describe('CambiarclavePage', () => {
  let component: CambiarclavePage;
  let fixture: ComponentFixture<CambiarclavePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CambiarclavePage],
      imports: [
        HttpClientModule,
        FormsModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CambiarclavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
