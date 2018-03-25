import { Injectable } from '@angular/core';
import {Http, Headers,Response }from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LimitService {

  url: String = "http://localhost:4000";

  constructor(
    private http: Http
  ) { }

  //get Limits of the Values of Infounits
  getLimits(){
    return this.http.get(this.url + '/limit').map((res:Response) => res.json());
  }

  setLimits(limits){
    return this.http.post(this.url + '/limit',limits).map((res:Response) => res.json());
  }

}
