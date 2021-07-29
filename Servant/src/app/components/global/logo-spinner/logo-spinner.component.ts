import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/services/global-services/loader-service/loader.service';

@Component({
  selector: 'app-logo-spinner',
  templateUrl: './logo-spinner.component.html',
  styleUrls: ['./logo-spinner.component.scss']
})
export class LogoSpinnerComponent {
  public isLoading: Subject<boolean> = this.loaderService.getLoader;
  constructor(private loaderService: LoaderService) { }
}
