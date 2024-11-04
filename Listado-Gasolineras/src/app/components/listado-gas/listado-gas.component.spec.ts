import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoGasComponent } from './listado-gas.component';

describe('ListadoGasComponent', () => {
  let component: ListadoGasComponent;
  let fixture: ComponentFixture<ListadoGasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoGasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
