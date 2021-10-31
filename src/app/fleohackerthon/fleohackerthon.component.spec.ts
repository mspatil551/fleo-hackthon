import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleohackerthonComponent } from './fleohackerthon.component';

describe('FleohackerthonComponent', () => {
  let component: FleohackerthonComponent;
  let fixture: ComponentFixture<FleohackerthonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleohackerthonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleohackerthonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
