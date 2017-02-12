import {Component, OnInit} from '@angular/core';
import {AF} from "../../services/af";

@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css']
})

export class SideNavComponent implements OnInit {
  isAuthenticated = false;

  constructor(private authService: AF) {}

  ngOnInit() {
    this.authService.authObservable.subscribe((result: boolean) => {
      this.isAuthenticated = result;
    });
  }

}
