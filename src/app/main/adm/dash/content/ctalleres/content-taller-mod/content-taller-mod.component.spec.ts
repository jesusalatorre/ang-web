import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTallerModComponent } from './content-taller-mod.component';

describe('ContentTallerModComponent', () => {
  let component: ContentTallerModComponent;
  let fixture: ComponentFixture<ContentTallerModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTallerModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTallerModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
