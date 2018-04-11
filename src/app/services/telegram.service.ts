import { Injectable } from '@angular/core';
import {Http, Headers,Response }from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {TokenService} from './token.service';

@Injectable()
export class TelegramService {

  url: String = "http://localhost:4000";
  

/**
 * Creates an instance of TelegramService.
 * @param {Http} http 
 * @param {TokenService} tokenService 
 * @memberof TelegramService
 */
constructor(
    private http: Http,
    private tokenService: TokenService
  ) { 
  }


    /**
     * Lädt alle Telegram Nutzer aus der Datenbank
     */
    getTelegramUsers(){
      let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.tokenService.loadToken() );
      return this.http.get(this.url + '/telegram',{headers: headers}).map((res:Response) => res.json());
    }

    
    /**
     * Löscht Telegram Nutzer in der Datenbank anhand der übergebenen TelegramID
     * @param telegramid 
     */
    deleteTelegramUser(telegramid){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.tokenService.loadToken() );
      return this.http.delete(this.url + '/telegram/' + telegramid,{headers: headers}).map((res:Response) => res.json());
    }

    /**
     * Speichert übergebenen Telegram Nutzer in der Datenbank ab
     */
    setTelegramUser(telegramuser){
      let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.tokenService.loadToken() );
      return this.http.post(this.url + '/telegram',telegramuser,{headers: headers}).map((res: Response) => res.json());
    }

    /**
     * Ruft den Aktuellen Aktivierungsstatus des Benachrichtigung Service ab
     */
    getStatus()
    {
      let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',this.tokenService.loadToken() );
      return this.http.get(this.url + '/telegram/status',{headers: headers}).map((res:Response) => res.json());
    }

    /**
     * Aktualisiert den Aktivierungsstatus des Benachrichtigung Service
     * @param status 
     */
    setStatus(status)
    {
      let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.tokenService.loadToken());
      var body = { "status": status};
      return this.http.post(this.url + '/telegram/status',body,{headers: headers}).map((res:Response) => res.json());
    }


}
