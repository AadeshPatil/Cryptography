import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncrpitionComponent } from './encrpition.component';

describe('EncrpitionComponent', () => {
  let component: EncrpitionComponent;
  let fixture: ComponentFixture<EncrpitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncrpitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncrpitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
