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
    console.log(request, 'request');
    request = request.clone({ headers: this.headers });
    // if (token) {
    if (false) {
      // request = request.clone({headers: request.headers.set('Authorization', 'test' + token )});
      request = request.clone({headers: request.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pbHNvbkBlbWFpbC5jb20iLCJwYXNzd29yZCI6Im5pbHNvbiIsImlhdCI6MTYyMjc1MDA2NiwiZXhwIjoxNjIyNzUzNjY2fQ.nEni9LFiksZ68M39sVNrz8TQ_gAu3qjj5mgXGl81hqo' )});
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

