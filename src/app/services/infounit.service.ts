import { Injectable } from '@angular/core';
import {Http, Headers,Response }from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {infounit} from '../class/infounit';

@Injectable()
export class InfounitService {

  url: String = "http://localhost:4000";

  constructor(
    private http: Http
  ) { }

  //get latest Unit by ID
  getUnitById(id){
    return this.http.get(this.url + '/filterunit/node' + id).map((res : Response) => res.json());
  }

}
