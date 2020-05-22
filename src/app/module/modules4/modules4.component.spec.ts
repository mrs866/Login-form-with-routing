import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modules4Component } from './modules4.component';

describe('Modules4Component', () => {
  let component: Modules4Component;
  let fixture: ComponentFixture<Modules4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modules4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modules4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
