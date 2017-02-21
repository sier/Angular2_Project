import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from "../../shared/animations/fadeIn.animation";
import {AngularFire,FirebaseListObservable} from "angularfire2";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [fadeInAnimation]
})
export class HomePageComponent implements OnInit {
  userinfo: FirebaseListObservable<any[]>; 
  horses: FirebaseListObservable<any[]>;
  trainings: FirebaseListObservable<any[]>;
  graphDataTrainings: any[] = [];

  
  constructor(private angularfire: AngularFire) {
  }
  
  ngOnInit() {
   
    this.userinfo = this.angularfire.database.list('/v1/userinfo/',{
      query: {
        orderByChild: 'id' ,
        equalTo: '25sZYMr8t9ZZCMtoaCq7NffdIP93'
      }
    }); 

    this.horses = this.angularfire.database.list('/v1/horses/',{
      query: {
        orderByChild: 'owner_id' ,
        equalTo: '25sZYMr8t9ZZCMtoaCq7NffdIP93'
      }
    });

    this.trainings = this.angularfire.database.list('/v1/trainings/',{
      query: {
        orderByChild: 'user' ,
        equalTo: '25sZYMr8t9ZZCMtoaCq7NffdIP93'
      }
    });
    
      this.test();
  }
  
  
  test() {

    for (let entry of this.trainings) {
        console.log(entry); // tränings skit visas här
      
         this.graphDataTrainings.push(entry.canter.beat)
    }
  }

}
