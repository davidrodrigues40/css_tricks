import { TestBed } from '@angular/core/testing';

import { TablePdfService } from './table-pdf.service';

describe('TablePdfService', () => {
  let service: TablePdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablePdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
