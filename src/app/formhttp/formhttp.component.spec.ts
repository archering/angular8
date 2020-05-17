import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormhttpComponent } from './formhttp.component';

describe('FormhttpComponent', () => {
  let component: FormhttpComponent;
  let fixture: ComponentFixture<FormhttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormhttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
