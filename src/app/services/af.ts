import {Injectable} from "@angular/core";
import * as firebase from 'firebase';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,FirebaseAuthState} from 'angularfire2';
import { Observable, Subject } from "rxjs/Rx";



@Injectable()
export class AF {

  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;

  constructor(private af: AngularFire) {


  }

 isAuthenticated(): Observable<boolean> {
    const subject = new Subject<boolean>();
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        subject.next(true);
      } else {
        subject.next(false);
      }
    });
    return subject.asObservable();
 }



  /**
   * Logs the user in using their Email/Password combo
   * @param email
   * @param password
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithEmail(email, password) {
    return this.af.auth.login({
        email: email,
        password: password,
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      });
  }



  /**
   * Logs in the user with Google
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

  /**
   * Logs in the user with Google
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithFacebook() {
    return this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    });
  }

  /**
   * Logs out the current user
   */
  logout() {
    return this.af.auth.logout();
  }


  /**
   *
   */
  addUserInfo(){
    //saved their auth info now save the rest to the db. For google logins
    this.users.push({
      email: this.email,
      displayName: this.displayName
    });
  }








}
