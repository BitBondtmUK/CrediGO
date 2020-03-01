import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 100
  };

  constructor() { }

  ngOnInit() {
  }

}
