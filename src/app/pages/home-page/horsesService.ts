import {Injectable} from "@angular/core";
import {AngularFire,FirebaseListObservable} from 'angularfire2';

@Injectable()
export class horsesService {


constructor(private af: AngularFire) {


}

  getHorseById(uid: string): FirebaseListObservable<any[]> { //Funktion som skulle kunna funka när riktiga användare loggar in, hittar hästen utifrån användarens ID
    return this.af.database.list('/v1/horses/' + uid);
  }


}
