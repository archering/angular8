import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpipeComponent } from './dpipe.component';

describe('DpipeComponent', () => {
  let component: DpipeComponent;
  let fixture: ComponentFixture<DpipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
