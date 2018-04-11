import { Component, OnInit } from '@angular/core';
import {InfounitService} from '../../services/infounit.service'
import {infounit} from '../../class/infounit'
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  //Node Array Deklarieren
  nodeArray =[];


/**
 * Creates an instance of DashboardComponent.
 * @param {InfounitService} infounitService 
 * @memberof DashboardComponent
 */
constructor(
    private infounitService : InfounitService,
  ) {  }

ngOnInit() {
    //laden der nodes
    this.infounitService.getNodeIds().subscribe(data =>{
      //IDs sortieren
      var unsortedID: Number[] = data;
      var sortFn = (n1 , n2) => { return n1 - n2;}
      var sortedID: Number[] = unsortedID.sort(sortFn);
      
      //für jede ID eine Abfrage mit den Aktuellen Werten
      for (let id of sortedID){
        this.infounitService.getUnitById(id).subscribe(infounitDB =>{
          //Infounit zum Array hinzufügen
          this.nodeArray.push(infounitDB);
        });
      }
    });
  }


}
