import {Component} from '@angular/core';
import {slideUpAnimation} from "../../shared/animations/slideUp.animation";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  animations: [slideUpAnimation],



})

export class AboutPageComponent {}
