import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { DataAsset } from 'src/app/models/data-asset';
import { PdfHtmlService } from 'src/app/services/pdf-service/pdf-html.service';
import { TablePdfService } from 'src/app/services/pdf-service/table-version/table-pdf.service';

@Component({
  selector: 'app-html-pdf',
  templateUrl: './html-pdf.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['./html-pdf.component.css'],
  providers: [
    { provide: PdfHtmlService, useClass: TablePdfService }
  ]
})
export class HtmlPdfComponent implements OnInit {
  fontSize: { 'font-size': string } = { 'font-size': '1rem' };
  dataAssets: DataAsset[] = [];
  private _container!: HTMLElement;

  constructor(private readonly _pdfService: PdfHtmlService) { }

  ngOnInit(): void {
    this._container = document.getElementById('html-pdf-page')!;
    this._pdfService.createPdf(this._container);
    this.resize();
  }

  resize(): void {
    const container: HTMLDivElement = document.getElementById('html-pdf-page')! as HTMLDivElement;
    const clientWidth = this._container.clientWidth;
    const percentage: number = clientWidth / 800;
    const height: number = 1100 * percentage;

    if (clientWidth >= 800) {
      container.style.height = `${height}px`;
    };

    this.fontSize = { 'font-size': `${percentage}rem;` };

    document.getElementById('html-pdf-page')!.setAttribute('style', `font-size: ${clientWidth / 800}rem; height: ${height}px;`);
  }

  dataAssetChanged(): void {
    this._container.children[0].remove();
    this._pdfService.createPdf(this._container);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resize();
  }
}
