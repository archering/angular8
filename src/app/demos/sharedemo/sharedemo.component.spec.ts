import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedemoComponent } from './sharedemo.component';

describe('SharedemoComponent', () => {
  let component: SharedemoComponent;
  let fixture: ComponentFixture<SharedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
