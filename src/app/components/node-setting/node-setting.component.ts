import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, ParamMap } from '@angular/router';
import { LimitService } from '../../services/limit.service';
import {limits} from '../../class/limit';

@Component({
  selector: 'app-node-setting',
  templateUrl: './node-setting.component.html',
  styleUrls: ['./node-setting.component.css']
})
export class NodeSettingComponent implements OnInit {



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private limitService : LimitService,
  ) { }




  ngOnInit() {

      //to Do
      // //laden der Limits
      this.limitService.getLimits().subscribe(limits => {
        console.log(limits);
      });
  }

}
