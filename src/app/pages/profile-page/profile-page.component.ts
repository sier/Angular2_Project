import {Component} from '@angular/core';
import {fadeInAnimation} from "../../shared/animations/fadeIn.animation";
import {slideToLeft} from "../../shared/animations/router.animations";
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  animations: [fadeInAnimation, slideToLeft],



})

export class ProfilePageComponent {




}
