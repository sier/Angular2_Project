import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import {FormsModule} from "@angular/forms";
import {HttpModule} from '@angular/http';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {routing} from "./app.routing";
import { MaterialModule } from '@angular/material';
import {AF} from "./services/af";
import { AuthGuard } from "./shared/guard/auth.guard";
import { HomePageComponent } from './pages/home-page/home-page.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {NavComponent} from './navbar/nav/nav.component';
import {SideNavComponent} from './navbar/sidenav/sidenav.component';
import {horsesService} from './pages/home-page/horsesService'
import {OverviewPageComponent} from './pages/overview-page/overview-page.component'
import { ChartsModule } from 'ng2-charts';


export const firebaseConfig = {
  apiKey: "AIzaSyBLAepT58ZEGZssaxDa5ohWJo3fjpP9gD8",
  authDomain: "equilab-157516.firebaseapp.com",
  databaseURL: "https://equilab-157516.firebaseio.com",
  storageBucket: "equilab-157516.appspot.com",
  messagingSenderId: "970803104790"
};



@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),routing,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    ChartsModule,


  ],
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    NavComponent,
    SideNavComponent,
    OverviewPageComponent,
    ProfilePageComponent,
    AboutPageComponent,

  ],
  bootstrap: [ AppComponent ],
  providers: [AF,AuthGuard,horsesService,]
})
export class AppModule {}