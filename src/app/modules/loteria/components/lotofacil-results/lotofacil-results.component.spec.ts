import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotofacilResultsComponent } from './lotofacil-results.component';

describe('LotofacilResultsComponent', () => {
  let component: LotofacilResultsComponent;
  let fixture: ComponentFixture<LotofacilResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotofacilResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotofacilResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
