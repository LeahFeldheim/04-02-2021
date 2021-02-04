import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempddaysComponent } from './tempddays.component';

describe('TempddaysComponent', () => {
  let component: TempddaysComponent;
  let fixture: ComponentFixture<TempddaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempddaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempddaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
