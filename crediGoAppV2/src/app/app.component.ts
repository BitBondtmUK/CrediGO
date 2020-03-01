import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { AuthService } from './services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthService,
    public afAuth: AngularFireAuth
  ) {
    var device_flag = null;

    this.initializeApp();
    //pletform: para saber que plataforma corre la PWA (Web, iOS, Android);
    platform.ready().then(() => {

      if (this.platform.is('android')) {
          console.log("running on Android device!");
          device_flag = 0;
      }
      if (this.platform.is('ios')) {
          console.log("running on iOS device!");
          device_flag = 1;
      }
      if (this.platform.is('mobileweb')) {
          console.log("running in a browser on mobile!");
      }

  })
  }

  login_flag = 0;

  initializeApp() {
    this.platform.ready().then(() => {
      this.afAuth.user.subscribe(user => {
        if(user){
          this.router.navigate(["/home"]);
        } else {
          this.router.navigate(["/landing"]);
        }
      }, err => {
        this.router.navigate(["/landing"]);
      }, () => {
        this.splashScreen.hide();
      })
      this.statusBar.styleDefault();
    });
  }

    public appPages = [
    {
      title:'Restaurantes',
      url: '/',
      icon:'pizza'
    },
    {
      title:'Bares',
      url: '/',
      icon:'beer'
    },
    {
      title:'Museos',
      url: '/',
      icon:'school'
    },
    {
      title:'Hospedaje',
      url: '/',
      icon:'business'
    },
    {
      title:'Transporte',
      url: '/',
      icon:'bus'
    },
    {
      title:'Vuelos',
      url: '/',
      icon:'airplane'
    },
    {
      title:'Conocer Personas',
      url: '/',
      icon:'md-contacts'
    }
  ];
  dark = false;

  logout(){
    this.authService.doLogout()
    .then(res => {
      this.router.navigate(["/login"]);
    }, err => {
      console.log(err);
    })
  }
}
