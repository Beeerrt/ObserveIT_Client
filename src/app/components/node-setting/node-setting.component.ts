import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LimitService } from '../../services/limit.service';
import { TelegramService } from '../../services/telegram.service';
import { limits } from '../../class/limit';
import { Subscriber } from 'rxjs/Subscriber';
import { forEach } from '@angular/router/src/utils/collection';
import { FlashMessagesService } from 'angular2-flash-messages';
import { empty } from 'rxjs/Observer';

@Component({
  selector: 'app-node-setting',
  templateUrl: './node-setting.component.html',
  styleUrls: ['./node-setting.component.css']
})
export class NodeSettingComponent implements OnInit {

  limits: limits;
  telegramArray = [];
  telegramStatus: boolean = true;
  telegramid: String;
  name: String;
  nachname: String;

  /**
   * Creates an instance of NodeSettingComponent.
   * @param {ActivatedRoute} route 
   * @param {Router} router 
   * @param {LimitService} limitService 
   * @param {TelegramService} telegramService 
   * @param {FlashMessagesService} flashMessage 
   * @memberof NodeSettingComponent
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private limitService: LimitService,
    private telegramService: TelegramService,
    private flashMessage: FlashMessagesService
  ) { }


  ngOnInit() {
    this.loadStatus();

    //initialisieren der Variablen
    this.telegramid = '';
    this.name = '';
    this.nachname = '';

    //laden der Limits
    this.limitService.getLimits().subscribe(limits => {
      this.limits = limits[0];
    });

    //laden der TelegramUser
    this.telegramService.getTelegramUsers().subscribe(telegramUsers => {
      this.telegramArray = telegramUsers;
    })
  }

  /**
   * Fügt neuen Telegram Nutzer in der Datenbank hinzu
   */
  onTelegramAdd() {
    var newTelegramUser = {
      telegramid: this.telegramid,
      name: this.name,
      nachname: this.nachname
    }
    if (newTelegramUser.nachname == '' ||
      newTelegramUser.nachname == '' ||
      newTelegramUser.telegramid == '') {
      this.flashMessage.show('Bitte alle Felder ausfüllen', { cssClass: 'alert-warning', timeout: 5000 });
    }
    else {
      this.telegramService.setTelegramUser(newTelegramUser).subscribe(data => {
        if (data.success) {
          this.flashMessage.show('TelegramUser erfolgreich hinzugefügt', { cssClass: 'alert-success', timeout: 5000 });
          //neu laden der Telegram User
          this.telegramService.getTelegramUsers().subscribe(telegramUsers => {
            this.telegramArray = telegramUsers;
          })
        }
        else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        }
      })
    }
  }

  /**
   * 
   * Löscht übergebenen Telegram User in der Datenbank
   * @param {any} telegramUser 
   */
  onTelegramDelete(telegramUser) {
    //console.log(telegramid);
    this.telegramService.deleteTelegramUser(telegramUser.telegramid).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
        //neu laden der Telegram User
        this.telegramService.getTelegramUsers().subscribe(telegramUsers => {
          this.telegramArray = telegramUsers;
        })
      }
      else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
      }
    })
  }

  /**
   * Lädt den aktuellen Aktivierungsstatus des Benachrichtigung Service
   */
  loadStatus(){
    this.telegramService.getStatus().subscribe(data => {
      this.telegramStatus = data[0].status;
    })
  }
  
  /**
  * Ändert den Aktivierungsstatus des Sliders für den Benachrichtigung Service
  */
  setStatus(){
    if(this.telegramStatus){
      this.telegramStatus = false;
    }
    else
    {
      this.telegramStatus = true;
    }
  }

  /**
   * Aktualisiert den Aktivierungsstatus für den Benachrichtigung Service
   */
  saveTelegramStatus(){
    this.telegramService.setStatus(this.telegramStatus).subscribe(data =>{
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
      }
      else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
      }
    })
  }

  /**
   * Speichert die Limits in er Datenbank ab
   */
  saveLimits(){
    this.limitService.setLimits(this.limits).subscribe(data =>{
       
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
      }
      else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
      }
    })
  }

}
