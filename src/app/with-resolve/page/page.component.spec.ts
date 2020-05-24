import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageResolveComponent } from './page.component';

describe('PageComponent', () => {
  let component: PageResolveComponent;
  let fixture: ComponentFixture<PageResolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageResolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
