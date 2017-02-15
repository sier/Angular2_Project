import {Component, OnInit} from '@angular/core';
import {AF} from "../../services/af";
import {Subscription} from "rxjs/Rx";
import * as firebase from 'firebase';


@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css']
})

export class NavComponent implements OnDestroy {
  isAuthenticated = false;
  private subscription: Subscription;
  constructor(private authService: AF) {
    
   this.subscription = this.authService.isAuthenticated().subscribe(
      authStatus => this.isAuthenticated = authStatus
    );
 
  }


  onSignOut() {
    this.authService.logout();
  }

ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
