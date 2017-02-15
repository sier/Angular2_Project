import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from "../../shared/animations/fadeIn.animation";
import {AngularFire,FirebaseListObservable} from "angularfire2";
import {AF} from '../../services/af';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [fadeInAnimation]
})
export class HomePageComponent {
  horses: FirebaseListObservable<any[]>; //Detta är vad som används just nu för att visa testvärdena då det inte finns några användare kopplade till tabellerna i testdatabasen

  constructor(private angularfire: AngularFire){


    this.horses = angularfire.database.list('/v1/horses/'); //Detta är vad som används just nu för att visa testvärdena då det inte finns några användare kopplade till tabellerna i testdatabasen


  }
  

}
