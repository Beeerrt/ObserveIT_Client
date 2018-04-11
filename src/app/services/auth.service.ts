import { Injectable } from '@angular/core';
import {Http, Headers}from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import {user} from '../class/user';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
    
    url: String = 'http://localhost:4000' ;
    authToken: any;
    user: any;

    

/**
 * Creates an instance of AuthService.
 * @param {Http} http 
 * @param {Router} router 
 * @param {TokenService} tokenService 
 * @memberof AuthService
 */
constructor(private http: Http,
    private router: Router,
    private tokenService : TokenService) {
   
  }

  /**
   * Legt übergebenen User in der Datenbank an
   * @param user 
   */
  registerUser(user)
  {
    this.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authToken );
    return this.http.post(this.url + '/users/register', user,{headers: headers}).map(res => res.json());
  }

  /**
   * Authentifizieren des übergebenen Users am Webservice
   * @param user
   */
  authenticateUser(user)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + '/users/authenticate', user,{headers: headers}).map(res => res.json());
  }


/**
 * Aktualisiert Userdaten in der Datenbank
 * @param {any} currentUser 
 * @param {any} newUser 
 */
setProfile(currentUser,newUser)
  {
    var users = [currentUser,newUser];
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken );
    headers.append('Content-Type', 'application/json');;
    return this.http.put(this.url + '/users/profile',users,{headers: headers}).map(res => res.json());
  }

  /**
   * Lädt alle Userdaten des übergebenen Usernamen
   * @param username 
   */
  getProfile(username)
  {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken );
    headers.append('Content-Type', 'application/json');
    console.log(this.authToken);
    return this.http.get(this.url + '/users/profile/' + username,{headers: headers}).map(res => res.json());
  }

  /**
   * Löscht übergebenen User aus der Datenbank
   * @param user 
   */
  deleteUser(user){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken );
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.url + '/users/' + user.username,{headers: headers}).map(res => res.json());
  }


  /**
   * Lädt alle User aus der Datenbank
   */
  getUsers()
  {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken );
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.url + '/users/',{headers: headers}).map(res => res.json());
  }

  /**
   * Übergebenen User für den alten User im LocalStorage ersetzen
   * @param user 
   */
  refreshLocalUserData(user)
  {
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(user));
  }

  /**
   * Speichern des Tokens und des Users im LocalStorage des Webbrowsers
   * @param token 
   * @param user 
   */
  storeUserData(token, user)
  {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
    //Parameter id_token wird bei der Authentifizierung automatisch gesucht
    localStorage.setItem('id_token', token);
    //JSON.stringify wird benötigt da keine JSON Files abgespeichert werden können im LocalStorage
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
    console.log("saved user");
    console.log(this.user);
  }

  /**
   * Lädt das Aktuelle Token aus dem LocalStorage
   */
  loadToken()
  {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  /**
   * Liefert User aus dem LocalStorage als JSON Obejkt zurück
   */
  getUserFromLocalStorage()
  {
     return JSON.parse(localStorage.getItem('user'));
  }

  /**
   * Prüft ob User authentifiziert ist
   */
  loggedIn()
  {
    //Prüfen ob die TimeToLife des Tokens abgelaufen ist
    return tokenNotExpired('id_token');
  }


/**
 *  Löscht den Inhalt des LocalStorage
 */
logout()
  {
    localStorage.clear();
  }

}