import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLoteriaComponent } from './index-loteria.component';

describe('IndexLoteriaComponent', () => {
  let component: IndexLoteriaComponent;
  let fixture: ComponentFixture<IndexLoteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexLoteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexLoteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
