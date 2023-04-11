import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BUSQUEDATESOROComponent } from './busqueda-tesoro.component';

describe('BUSQUEDATESOROComponent', () => {
  let component: BUSQUEDATESOROComponent;
  let fixture: ComponentFixture<BUSQUEDATESOROComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BUSQUEDATESOROComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BUSQUEDATESOROComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
