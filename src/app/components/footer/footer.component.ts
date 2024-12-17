import { Component } from '@angular/core';
import { LastUpdatedService } from 'src/app/services/last-updated-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [LastUpdatedService]
})
export class FooterComponent {

  constructor(private readonly _service: LastUpdatedService) { }

  lastUpdatedOn: string = this._service.LastUpdatedOn;
}
