import {Component, OnDestroy, OnInit} from '@angular/core';
import {AF} from "../../services/af";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css']
})

export class SideNavComponent implements OnDestroy, OnInit {
  isAuthenticated = false;
  private subscription: Subscription;
  user: any;

  constructor(private authService: AF) {

    this.subscription = this.authService.isAuthenticated().subscribe(
      authStatus => this.isAuthenticated = authStatus
    );

  }
  ngOnInit() {

    this.user = this.authService.user;

  }
  isAuth() {
    return this.isAuthenticated;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
