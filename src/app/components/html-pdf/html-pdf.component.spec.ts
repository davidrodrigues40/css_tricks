import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlPdfComponent } from './html-pdf.component';

describe('HtmlPdfComponent', () => {
  let component: HtmlPdfComponent;
  let fixture: ComponentFixture<HtmlPdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlPdfComponent]
    });
    fixture = TestBed.createComponent(HtmlPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
