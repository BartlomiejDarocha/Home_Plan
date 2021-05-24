import { Injectable } from '@angular/core';
import { LoaderService } from '../loader-service/loader.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

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
    // dodać token gdy już zrobię logowanie oraz Serwice do localStore
    request = request.clone({ headers: this.headers });
    if (token) {
      request = request.clone({headers: request.headers.set('Authorization', 'test' + token )});
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log( error, 'złapał Error');
        // dorobić obsługe błędów
        // dodać obłsugę błędów jak już zorbię utilsy, Apiservice i postawie server w Json;
        return throwError(error);
      }),
      finalize(() => {
        this.loaderService.hideLoader();
      })
    )
  }
}

