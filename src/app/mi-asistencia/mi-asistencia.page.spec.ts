import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiAsistenciaPage } from './mi-asistencia.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('MiAsistenciaPage', () => {
  let component: MiAsistenciaPage;
  let fixture: ComponentFixture<MiAsistenciaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [MiAsistenciaPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => 'test-value',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MiAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
