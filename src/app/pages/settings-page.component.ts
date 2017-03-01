import {Component} from '@angular/core';
import {fadeInAnimation} from "../../shared/animations/fadeIn.animation";
import {slideToLeft} from "../../shared/animations/router.animations";

@Component ({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
  animations: [slideToLeft, fadeInAnimation],
})
export class MySettingsPageComponent{
  constructor (){

  }

}




