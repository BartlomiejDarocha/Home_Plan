import { Component } from '@angular/core';
import { ApiService } from './services/global-services/api-service/api.service';
import { LoaderService } from './services/global-services/loader-service/loader.service';
import { UtilsService } from './services/global-services/utils-service/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Servant';

  constructor() {}
}
