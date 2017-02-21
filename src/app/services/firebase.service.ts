import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService{
  horses: FirebaseListObservable<Horses[]>;
  trainings: FirebaseListObservable<Trainings[]>;

  constructor(private af:AngularFire){

  }

  getHorses(){
    this.horses = this.af.database.list('/v1/horses') as FirebaseListObservable<Horses[]>
    return this.horses;
  }

  getTrainings(){
    this.trainings = this.af.database.list('/v1/trainings') as FirebaseListObservable<Trainings[]>
    return this.trainings;
  }
}

export interface Horses{
  $key?: string;
  bred?: number;
  discipline?:number;
  id:string;
  name?:string;
  owner_id?:string;
  shared_horse:boolean;
  should_be_fed?:boolean;
  stable_school_horse?:boolean;
  tool_weight?:number;
  type?:string;
  weight:number;
}

export interface Trainings{
  $key?: string;
  name?: string;
}
