import {Injectable} from "@angular/core";
import * as firebase from 'firebase';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,FirebaseAuthState} from 'angularfire2';
import { Observable, BehaviorSubject } from "rxjs";



@Injectable()
export class AF {

  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;
  private _authState: FirebaseAuthState = null;
  private _isAuthenticated = new BehaviorSubject<boolean>(false); // false is the initial value

//checks if a user is logged in
  get authObservable(): Observable<boolean> {
    return this._isAuthenticated.asObservable();
  }

  constructor(private af: AngularFire) {


    // Init user state
    af.auth.subscribe((state: FirebaseAuthState) => {
      this._authState = state;
      this._isAuthenticated.next(this._authState !== null);
    });
  }


  // used by the router (not an observable, only need to be checked once)
  get isAuthenticated(): boolean {
    return this._authState !== null;
  }

  // gets the user id
  get uid(): string {
    return this._isAuthenticated ? this._authState.uid : '';
  }
// gets the currently logged in user
  get user() {
    return this._isAuthenticated ? this._authState.auth : '';
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


  /**
   *
   * @param model
   * @returns {firebase.Promise<void>}
   * register function
   */
  registerUser(email, password) {
    console.log(email)
    return this.af.auth.createUser({
      email: email,
      password: password
    });


  }


}
