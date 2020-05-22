import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modules3Component } from './modules3.component';

describe('Modules3Component', () => {
  let component: Modules3Component;
  let fixture: ComponentFixture<Modules3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modules3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modules3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
