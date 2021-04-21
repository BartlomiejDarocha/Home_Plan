import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

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
