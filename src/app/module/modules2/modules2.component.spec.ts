import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modules2Component } from './modules2.component';

describe('Modules2Component', () => {
  let component: Modules2Component;
  let fixture: ComponentFixture<Modules2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modules2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modules2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
