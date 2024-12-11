import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrdocentePage } from './qrdocente.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
describe('QrdocentePage', () => {
  let component: QrdocentePage;
  let fixture: ComponentFixture<QrdocentePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QrdocentePage],
      imports: [
        HttpClientModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => 'test-value' } }
          },
        },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(QrdocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
