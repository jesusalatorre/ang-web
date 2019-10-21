import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtalleresComponent } from './ctalleres.component';

describe('CtalleresComponent', () => {
  let component: CtalleresComponent;
  let fixture: ComponentFixture<CtalleresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtalleresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtalleresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
