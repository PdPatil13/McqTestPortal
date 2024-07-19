import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginTestComponent } from './begin-test.component';

describe('BeginTestComponent', () => {
  let component: BeginTestComponent;
  let fixture: ComponentFixture<BeginTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeginTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeginTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
