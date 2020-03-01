import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items: Array<any>;

  constructor(
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private menu: MenuController
  ) { 
    window.localStorage.setItem('_flagLogin', '0');
  }

  ngOnInit(){
    this.banananas();
  }

  openFirst() {
    this.menu.enable(true, 'chat');
    this.menu.open('chat');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  bananna = 'banana'
  sandia = window.localStorage.getItem('_flagLogin');

  banananas(){
    console.log(this.bananna);
    console.log(this.sandia);
  }

}
