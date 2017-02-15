import {Component, OnDestroy} from '@angular/core';
import {AF} from "../../services/af";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css']
})

export class SideNavComponent implements OnDestroy {
  isAuthenticated = false;
  private subscription: Subscription;
  constructor(private authService: AF) {
  
    this.subscription = this.authService.isAuthenticated().subscribe(
      authStatus => this.isAuthenticated = authStatus
    );
  
  }

 isAuth() {
    return this.isAuthenticated;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
