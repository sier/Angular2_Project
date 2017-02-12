import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from "../../shared/animations/fadeIn.animation";
import {AF} from '../../services/af';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  animations: [fadeInAnimation],



})

export class ProfilePageComponent implements OnInit{

  user: any;

  constructor(private authService: AF){}

  ngOnInit(){
    this.user = this.authService.user;
  }



}
