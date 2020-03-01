import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})

export class LandingPage implements OnInit {
  

  constructor() {
    window.localStorage.setItem('_flagLogin', null);
  }

  ngOnInit() {
    
    
  }

  nfclick() {
  }

}
