import { Component, OnInit } from '@angular/core';
import {InfounitService} from '../../services/infounit.service'
import {infounit} from '../../class/infounit'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //temperatur zum testen des Intervalls
  temperatur = 30;

  //Node Array Deklarieren
  nodeArray =[];

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
    private infounitService : InfounitService,
  ) {
    //aufruf eines Intervalls zu testzwecken
    //setInterval(() => { this.sayhello(); }, 2000);
  }

  ngOnInit() {
    //laden der nodes
    var nodeids = this.infounitService.getNodeIds().subscribe(data =>{
      //IDs sortieren
      var unsortedID: Number[] = data;
      var sortFn = (n1 , n2) => { return n1 - n2;}
      var sortedID: Number[] = unsortedID.sort(sortFn);
      
      //für jede ID eine Abfrage mit den Aktuellen Werten
      for (let id of sortedID){
        //console.log(id);
         
        this.infounitService.getUnitById(id).subscribe(infounitDB =>{
          //Infounit zum Array hinzufügen
          this.nodeArray.push(infounitDB);
          //console.log(infounitDB);
          //console.log(this.nodeArray);
        });
      }
    });
    
  }

  sayhello() {
    //console.log(this.temperatur);
  }
}
