import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLSearchParams } from 'url';

// class 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  private dataToSendConvert(data: any, body: URLSearchParams, name = ''): void {
    for (const key in data) {
      if (data[key] instanceof Array || data[key] instanceof Object) {
        this.dataToSendConvert(
          data[key],
          body,
          name.length ? `${name}[${key}]`: `${key}`
        )
      } else {
        body.append(name.length ? `${name}[${key}]`: `${key}`, data[key]);
      }
    }
  } 

  private dataToSend(data): string {
    const body = new URLSearchParams;
    this.dataToSendConvert(data, body);
    return body.toString();
  }

  public get(url: string, options = {changeApi: null, params: {}}): Observable<any> {
    return this.httpClient.get(url, {params: options.params});
  }

  public getNotLoader(url: string, options = {changeApi: null, params: {}}): Observable<any> {
    return this.httpClient.get(url, {params: options.params})
  }

  public post(url, body: any, options = {changeApi: null, params: {}}): Observable<any> {
    // Ustalić przy budowaniu servera jakie dane będę wysyłać i odpowiednio je obrobić przed wysyłką na server 
    return this.httpClient.post(url, this.dataToSend(body), {params: options.params});
  }

  public put(url, body: any, options = {changeApi: null, params: {}}): Observable<any> {
    // Ustalić przy budowaniu servera jakie dane będę wysyłać i odpowiednio je obrobić przed wysyłką na server 
    return this.httpClient.put(url, this.dataToSend(body), {params: options.params});
  }

  public delete(url: string, options = {changeApi: null, params: {}}): Observable<any> {
    return this,this.httpClient.delete(url, {params: options.params});
  }

}
