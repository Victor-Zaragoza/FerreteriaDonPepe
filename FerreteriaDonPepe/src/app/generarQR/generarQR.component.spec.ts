import { ComponentFixture, TestBed } from '@angular/core/testing';


import { GenerarQRComponent } from './generarQR.component';

describe('GenerarQRComponent', () => {
  let component: GenerarQRComponent;
  let fixture: ComponentFixture<GenerarQRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarQRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
