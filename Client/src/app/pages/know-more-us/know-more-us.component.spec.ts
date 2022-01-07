import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMoreUsComponent } from './know-more-us.component';

describe('KnowMoreUsComponent', () => {
  let component: KnowMoreUsComponent;
  let fixture: ComponentFixture<KnowMoreUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowMoreUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowMoreUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
