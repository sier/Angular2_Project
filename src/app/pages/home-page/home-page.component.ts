import {Component, OnInit} from '@angular/core';
import {horsesService} from './horsesService'
import {fadeInAnimation} from "../../shared/animations/fadeIn.animation";
import {AngularFire,FirebaseListObservable} from "angularfire2";
import {AF} from '../../services/af';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [fadeInAnimation]
})
export class HomePageComponent implements OnInit{
  horse: any[] = []; //För funktionen getHorseByID i horsesService ska bytas till horses egentligen som nedan
  horses: FirebaseListObservable<any[]>; //Detta är vad som används just nu för att visa testvärdena då det inte finns några användare kopplade till tabellerna i testdatabasen

  constructor(private angularfire: AngularFire,
              private horsesService: horsesService,
              private af: AF){


    this.horses = angularfire.database.list('/v1/horses/'); //Detta är vad som används just nu för att visa testvärdena då det inte finns några användare kopplade till tabellerna i testdatabasen


  }
  ngOnInit() { //För funktionen getHorseByID i horsesService
    this.getHorse();
  }


  getHorse() { //För funktionen getHorseByID i horsesService
    let uid = this.af.uid;

    this.horsesService.getHorseById(uid).subscribe(res => {
      console.log("SUB:", res);
      this.horse = res;
    });
  }

}
