import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
/**
 * Creates an instance of HomeComponent.
 * @param {AuthService} authService 
 * @memberof HomeComponent
 */
constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

}
