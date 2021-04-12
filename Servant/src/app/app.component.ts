import { Component } from '@angular/core';
import { LoaderService } from './services/global-services/loader-service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Servant';

  constructor(private loaderService: LoaderService) {}

  public testLoader(): void {
    this.loaderService.showLoader();
    setTimeout(() => {
      this.loaderService.hideLoader();
    }, 2000);
  }
}
