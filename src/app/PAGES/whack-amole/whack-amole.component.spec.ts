import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhackAMoleComponent } from './whack-amole.component';

describe('WhackAMoleComponent', () => {
  let component: WhackAMoleComponent;
  let fixture: ComponentFixture<WhackAMoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhackAMoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhackAMoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
