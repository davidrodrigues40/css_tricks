import { TestBed } from '@angular/core/testing';

import { PdfHtmlService } from './pdf-html.service';

describe('PdfHtmlService', () => {
  let service: PdfHtmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfHtmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
