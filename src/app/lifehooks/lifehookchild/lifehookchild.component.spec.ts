import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifehookchildComponent } from './lifehookchild.component';

describe('LifehookchildComponent', () => {
  let component: LifehookchildComponent;
  let fixture: ComponentFixture<LifehookchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifehookchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifehookchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
