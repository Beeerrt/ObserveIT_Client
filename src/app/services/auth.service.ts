import { Injectable } from '@angular/core';
import {Http, Headers}from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import {user} from '../class/user';

@Injectable()
export class AuthService {
    
    //url: 'http://localhost:4000';
    authToken: any;
    user: user;
    url: String = "http://localhost:4000";
    


  constructor(private http: Http) {}


  //Registriert den übergebenen User über die API an der Datenbank
  registerUser(user)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    return this.http.post(this.url + '/users/register', user,{headers: headers}).map(res => res.json());
  }

  //Anmelden des Users und rücklieferung des Auth_Tokens
  authenticateUser(user)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(user);
    return this.http.post(this.url + '/users/authenticate', user,{headers: headers}).map(res => res.json());
  }

  //Userdaten in der API ändern
  setProfile(users)
  {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken );
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.url + '/users/profile', user,{headers: headers}).map(res => res.json());
  }


  //Userdaten aus der API abfragen
  getProfile()
  {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken );
    headers.append('Content-Type', 'application/json');
    
    return this.http.get(this.url + '/users/profile',{headers: headers}).map(res => res.json());
  }

  //Speichern der lokalen Userdaten im Browser
  storeUserData(token, user)
  {
    //Parameter id_token wird bei der Authentifizierung automatisch gesucht
    localStorage.setItem('id_token', token);
    //JSON.stringify wird benötigt da keine JSON Files abgespeichert werden können im LocalStorage
    localStorage.setItem('user', JSON.stringify(user));
    
    this.authToken = token;
    this.user = user;
  }

  loadToken()
  {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  //getUser from LocalStorage
  getUserFromLocalStorage()
  {
     return JSON.parse(localStorage.getItem('user'));
  }

  //Check if user is loggedin 
  loggedIn()
  {
    return tokenNotExpired('id_token');
  }

  logout()
  {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}