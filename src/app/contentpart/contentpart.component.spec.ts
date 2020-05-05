import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentpartComponent } from './contentpart.component';

describe('ContentpartComponent', () => {
  let component: ContentpartComponent;
  let fixture: ComponentFixture<ContentpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
