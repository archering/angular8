import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenComponent } from './ren.component';

describe('RenComponent', () => {
  let component: RenComponent;
  let fixture: ComponentFixture<RenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
