import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempnowComponent } from './tempnow.component';

describe('TempnowComponent', () => {
  let component: TempnowComponent;
  let fixture: ComponentFixture<TempnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
