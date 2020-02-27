import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaEncuestaPage } from './lista-encuesta.page';

describe('ListaEncuestaPage', () => {
  let component: ListaEncuestaPage;
  let fixture: ComponentFixture<ListaEncuestaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEncuestaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaEncuestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
