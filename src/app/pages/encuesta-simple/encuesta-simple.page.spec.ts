import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EncuestaSimplePage } from './encuesta-simple.page';

describe('EncuestaSimplePage', () => {
  let component: EncuestaSimplePage;
  let fixture: ComponentFixture<EncuestaSimplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaSimplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EncuestaSimplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
