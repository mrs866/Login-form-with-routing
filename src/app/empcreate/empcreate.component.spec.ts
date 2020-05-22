import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcreateComponent } from './empcreate.component';

describe('EmpcreateComponent', () => {
  let component: EmpcreateComponent;
  let fixture: ComponentFixture<EmpcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
