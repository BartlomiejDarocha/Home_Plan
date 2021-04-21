import { Component } from '@angular/core';
import { LoaderService } from './services/global-services/loader-service/loader.service';
import { UtilsService } from './services/global-services/utils-service/utils.service';

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

  public testDialog(): void {
    this.utils.openStandardAlert('Test Header','Test Content')
  }

  public async testConfirmDialogDefButtons(): Promise<void> {
    try {
      const test = await this.utils.openConfirmAlert('Test ConfirmHeader', 'Test ConfirmContent');
      console.log(test, 'test');
    } catch(err) {
      console.error(err, 'testConfirmError');
    }
  }

  public testConfirmDialogSetButtons(): void {
    this.utils.openConfirmAlert('Test ConfirmHeader', 'Test ConfirmContent', 'OKButton', 'CancelButton');
  }
}
