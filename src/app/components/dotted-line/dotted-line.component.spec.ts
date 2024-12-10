import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DottedLineComponent } from './dotted-line.component';

describe('DottedLineComponent', () => {
  let component: DottedLineComponent;
  let fixture: ComponentFixture<DottedLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DottedLineComponent]
    });
    fixture = TestBed.createComponent(DottedLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
