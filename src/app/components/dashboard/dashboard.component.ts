import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //temperatur zum testen des Intervalls
  temperatur = 30;

  //test nodes
  node1 = {
    nodeid: 1,
    temperatur:"40",
    incline:"10000",
    humidity:"10000",
    brightness:"10000",
    positon:"living-room",
    date:'2017 - 10 - 28 17: 28:35.776'
  }

  node2 = {
    nodeid: 2,
    temperatur:"10",
    incline:"10000",
    humidity:"10000",
    brightness:"10000",
    positon:"living-room",
    date:'2017 - 10 - 28 17: 28:35.776'
  }

  node3 = {
    nodeid: 3,
    temperatur:"25",
    incline:"10000",
    humidity:"10000",
    brightness:"10000",
    positon:"living-room",
    date:'2017 - 10 - 28 17: 28:35.776'
  }

  //testarray für node daten
  nodes = [this.node1, this.node2, this.node3];


  constructor(

  ) {
    //aufruf eines Intervalls zu testzwecken
    setInterval(() => { this.sayhello(); }, 2000);
  }

  ngOnInit() {
  }

  sayhello() {
    //console.log(this.temperatur);
  }
}
