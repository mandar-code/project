import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionformsComponent } from './admissionforms.component';

describe('AdmissionformsComponent', () => {
  let component: AdmissionformsComponent;
  let fixture: ComponentFixture<AdmissionformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
