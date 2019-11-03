import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DygenericService {
  private dyUrl = '../../assets/json/mock.json';
  constructor (private http: Http) {}

  getGenericService() : Observable<any[]> {
    return this.http.get(this.dyUrl).map(res => res.json()).catch((error:any) => Observable.throw(error.json.error || 'Server error'));
  }
}
