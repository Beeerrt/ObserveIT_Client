import { Injectable } from '@angular/core';
import {Http, Headers,Response }from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {infounit} from '../class/infounit';
import {TokenService} from './token.service';

@Injectable()
export class InfounitService {

  url: String = "http://localhost:4000";
  authToken: any;
/**
 * Creates an instance of InfounitService.
 * @param {Http} http 
 * @param {TokenService} tokenService 
 * @memberof InfounitService
 */
constructor(
    private http: Http,
    private tokenService: TokenService
  ) { 
      this.authToken = this.tokenService.loadToken();
    }

  /**
   * Laden der Aktuellsten Infounit der übergebenen InfounitID
   * @param id 
   */
  getUnitById(id){
    //laden des Tokens
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.tokenService.loadToken() );
    return this.http.get(this.url + '/filterunit/node' + id,{headers: headers}).map((res : Response) => res.json());
  }
  /**
   * Gibt aktuellesten Node IDs zurück
   */
  getLatestUnits()
  {
    var nodeids;
    this.getNodeIds().subscribe(data => {
      nodeids = data;
    });
    return nodeids;
  }


  /**
   * Liefert die enthaltenen Node IDs aus der Datenbank zurück
   */
  getNodeIds()
  {
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',this.tokenService.loadToken() );
    return this.http.get(this.url + '/filterunit/count',{headers: headers}).map((res : Response) => res.json());
  }

}
