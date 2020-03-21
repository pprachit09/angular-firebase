import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, isObservable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CsmUserdataService {

  constructor(private http: HttpClient) { }

  AdminPortalGetApi(path: any, params: any) {
    const httpOptionsGet = {
      headers : {'Content-Type': 'application/json'},
      params
    };
    return this.http.get(path, httpOptionsGet);
  }

  AdminPortalPostApi(url: any, apiBody: any) {
    const httpOptionsPost = {
      headers : {'Content-Type': 'application/json'},
    };
    return this.http.post(url, apiBody, httpOptionsPost);
  }

  AdminPortalPutApi(url: any, apiBody: any) {
    const httpOptionsPost = {
      headers : {'Content-Type': 'application/json'},
    };
    return this.http.put(url, apiBody, httpOptionsPost);
  }
  public getJSON(url): Observable<any> {
    return this.http.get(url);
  }
}
