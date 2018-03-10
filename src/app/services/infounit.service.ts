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

  getLatestUnits()
  {
    var nodeids;
    console.log("getNodewird aufgerufen");
    this.getNodeIds().subscribe(data => {
      nodeids = data;
    });
    return nodeids;
  }

  //liefert die Node ID's aus der DB zurück
  getNodeIds()
  {
    console.log(this.url + '/filterunit/count');
    return this.http.get(this.url + '/filterunit/count').map((res : Response) => res.json());
  }
}
