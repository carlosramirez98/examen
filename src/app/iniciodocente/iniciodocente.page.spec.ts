import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciodocentePage } from './iniciodocente.page';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

describe('IniciodocentePage', () => {
  let component: IniciodocentePage;
  let fixture: ComponentFixture<IniciodocentePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IniciodocentePage],
      imports: [
        HttpClientModule,
        IonicModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(IniciodocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
