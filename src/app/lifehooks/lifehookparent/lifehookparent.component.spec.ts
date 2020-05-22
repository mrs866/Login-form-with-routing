import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifehookparentComponent } from './lifehookparent.component';

describe('LifehookparentComponent', () => {
  let component: LifehookparentComponent;
  let fixture: ComponentFixture<LifehookparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifehookparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifehookparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
