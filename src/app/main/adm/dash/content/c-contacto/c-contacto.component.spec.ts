import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CContactoComponent } from './c-contacto.component';

describe('CContactoComponent', () => {
  let component: CContactoComponent;
  let fixture: ComponentFixture<CContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
