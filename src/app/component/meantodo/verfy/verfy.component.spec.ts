import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfyComponent } from './verfy.component';

describe('VerfyComponent', () => {
  let component: VerfyComponent;
  let fixture: ComponentFixture<VerfyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerfyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerfyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
