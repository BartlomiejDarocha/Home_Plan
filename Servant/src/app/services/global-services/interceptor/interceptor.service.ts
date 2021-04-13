import { Injectable } from '@angular/core';
import { LoaderService } from '../loader-service/loader.service';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  private headers = new HttpHeaders({
    'Content-type': 'application/json'
  })
  constructor(private loaderService: LoaderService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.showLoader();
    const token: string = localStorage.getItem('token');


  }
}

