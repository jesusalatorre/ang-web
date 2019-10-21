import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CHomwComponent } from './c-homw.component';

describe('CHomwComponent', () => {
  let component: CHomwComponent;
  let fixture: ComponentFixture<CHomwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CHomwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CHomwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
