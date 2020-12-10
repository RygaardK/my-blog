import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivepostComponent } from './fivepost.component';

describe('FivepostComponent', () => {
  let component: FivepostComponent;
  let fixture: ComponentFixture<FivepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FivepostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FivepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
