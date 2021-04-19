import { Component } from '@angular/core';
import { LoaderService } from './services/global-services/loader-service/loader.service';
import { UtilsService } from './services/global-services/utils/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Servant';

  constructor(private loaderService: LoaderService, private utils: UtilsService) {}

  public testLoader(): void {
    this.loaderService.showLoader();
    setTimeout(() => {
      this.loaderService.hideLoader();
    }, 2000);
  }

  public testDialog() {
    this.utils.openStandardAlert({
      header: 'Test Header',
      content: 'Test Content'
    })

  }
}
