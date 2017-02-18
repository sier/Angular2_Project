import {Component} from '@angular/core';
import {fadeInAnimation} from "../../shared/animations/fadeIn.animation";
import {AngularFire,FirebaseListObservable} from "angularfire2";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [fadeInAnimation]
})
export class HomePageComponent {
  userinfo: FirebaseListObservable<any[]>; //Detta är vad som används just nu för att visa testvärdena då det inte finns några användare kopplade till tabellerna i testdatabasen

  constructor(private angularfire: AngularFire){


    this.userinfo = angularfire.database.list('/v1/userinfo/',{
      query: {
        orderByChild: 'id' ,
        equalTo: '25sZYMr8t9ZZCMtoaCq7NffdIP93'
      }
    }); //Detta är vad som används just nu för att visa testvärdena då det inte finns några användare kopplade till tabellerna i testdatabasen


  }
  

}
