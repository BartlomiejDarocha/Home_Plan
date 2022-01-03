import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLSearchParams } from 'url';

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

  public get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  public delete(url: string): Observable<any> {
    return this,this.httpClient.delete(url);
  }

  public post(url, body: any): Observable<any> {
    // Ustalić przy budowaniu servera jakie dane będę wysyłać i odpowiednio je obrobić przed wysyłką na server 
    return this.httpClient.post(url, body);
  }

  public put(url, body: any): Observable<any> {
    // Ustalić przy budowaniu servera jakie dane będę wysyłać i odpowiednio je obrobić przed wysyłką na server 
    return this.httpClient.put(url, body);
  }

}
