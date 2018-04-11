import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  constructor() { }


  /**
   * Ruft das aktuelle Token aus dem LocalStorage ab
   */
  loadToken()
  {
    var token = localStorage.getItem('id_token');
    return token;
  }

  /**
   * Löscht den LocalStorage des Webbrowsers
   */
  resetToken(){
    localStorage.clear();
  }
} 
