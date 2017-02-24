import {Component, OnDestroy, OnInit} from '@angular/core';
import {AF} from "../../services/af";
import {Subscription} from "rxjs/Rx";



@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css']
})

export class NavComponent implements OnDestroy,OnInit {
  isAuthenticated = false;
  user: any;
  private subscription: Subscription;
  constructor(private authService: AF) {


    this.subscription = this.authService.isAuthenticated().subscribe(
      authStatus => this.isAuthenticated = authStatus
    );

  }

  ngOnInit(){

    this.user = this.authService.user;

  }


 isAuth() {
    return this.isAuthenticated;
  }

  onSignOut() {
    this.authService.logout();
  }

ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
