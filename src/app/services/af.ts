import {Injectable} from "@angular/core";
import * as firebase from 'firebase';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,FirebaseAuthState} from 'angularfire2';
import {Observable, Subject, BehaviorSubject} from "rxjs/Rx";
import {Router} from "@angular/router";



@Injectable()
export class AF {


  public email: string;
  public user: any;

  constructor(private af: AngularFire, private router: Router) {


  }


 /* get userEmail(){

    this.af.auth.subscribe(user => {

      if(user) {
// gets users email if logged in
        this.user = this.af.auth.getAuth().auth.email

      }
      else {
// user not logged in

      }
    });
    return this.user;
  }
*/

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
   * Logs out the current user
   */
  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/login']);
  }


  /**
   *
   */









}
