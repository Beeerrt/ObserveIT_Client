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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private limitService: LimitService,
    private telegramService: TelegramService,
    private flashMessage: FlashMessagesService
  ) { }



  telegramid: String;
  name: String;
  nachname: String;


   

  ngOnInit() {

    this.loadStatus();

    //initialisieren der Variablen
    this.telegramid = '';
    this.name = '';
    this.nachname = '';

    //to Do
    // //laden der Limits
    this.limitService.getLimits().subscribe(limits => {
      this.limits = limits[0];
    });

    //laden der TelegramUser
    this.telegramService.getTelegramUsers().subscribe(telegramUsers => {
      this.telegramArray = telegramUsers;
      // this.telegramArray.forEach(element =>{
      //   console.log(element);
      // })
      // console.log(this.telegramArray[0]);



    })
  }
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

  loadStatus(){
    this.telegramService.getStatus().subscribe(data => {
      console.log(data[0].status);
      this.telegramStatus = data[0].status;
    })
  }

  setStatus(){
    if(this.telegramStatus){
      this.telegramStatus = false;
    }
    else
    {
      this.telegramStatus = true;
    }
    console.log(this.telegramStatus);
  }

  saveTelegramStatus(){
    console.log("saveStatus");
    this.telegramService.setStatus(this.telegramStatus).subscribe(data =>{
       
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
      }
      else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
      }
    })
  }

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
