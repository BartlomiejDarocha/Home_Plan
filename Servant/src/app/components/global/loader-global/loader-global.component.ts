import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/services/global-services/loader-service/loader.service';

@Component({
  selector: 'app-loader-global',
  templateUrl: './loader-global.component.html',
  styleUrls: ['./loader-global.component.scss']
})
export class LoaderGlobalComponent {
  public isLoading: Subject<boolean> = this.loaderService.getLoader;
  public loaderOptions = {
    color: 'primary',
    mode: 'indeterminate',
    value: 50
  }

  constructor(public loaderService: LoaderService) { }

}
