import { Injectable } from '@angular/core';
import {Http, Headers,Response }from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {TokenService} from './token.service';

@Injectable()
export class LimitService {

  url: String = "http://localhost:4000";
  authToken: any;

  /**
   * Creates an instance of LimitService.
   * @param {Http} http 
   * @param {TokenService} tokenService 
   * @memberof LimitService
   */
  constructor(
    private http: Http,
    private tokenService: TokenService
  ) {
   }

 
  /**
   *Lädt alle Limits aus der Datenbank
   */
  getLimits(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.tokenService.loadToken() );
    return this.http.get(this.url + '/limit',{headers: headers}).map((res:Response) => res.json());
  }
  /**
   * Speichert die übergebenen Limits in der Datenbank ab
   * @param limits 
   */
  setLimits(limits){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.tokenService.loadToken() );
    return this.http.post(this.url + '/limit',limits,{headers: headers}).map((res:Response) => res.json());
  }

}
