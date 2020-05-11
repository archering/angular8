import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnautoorizeComponent } from './unautoorize.component';

describe('UnautoorizeComponent', () => {
  let component: UnautoorizeComponent;
  let fixture: ComponentFixture<UnautoorizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnautoorizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnautoorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
