import { Injectable } from '@angular/core';
import {Http, Headers,Response }from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TelegramService {

  url: String = "http://localhost:4000";

  constructor(
    private http: Http
  ) { }


    //get Limits of the Values of Infounits
    getTelegramUsers(){
      return this.http.get(this.url + '/telegram').map((res:Response) => res.json());
    }

    //delete one telegramuser by ID
    deleteTelegramUser(telegramid){
      return this.http.delete(this.url + '/telegram/' + telegramid).map((res:Response) => res.json());
    }

    setTelegramUser(telegramuser){
      return this.http.post(this.url + '/telegram',telegramuser).map((res: Response) => res.json());
    }

    getStatus()
    {
      return this.http.get(this.url + '/telegram/status').map((res:Response) => res.json());
    }

    setStatus(status)
    {
      var body = { "status": status};
      return this.http.post(this.url + '/telegram/status',body).map((res:Response) => res.json());
    }


}
