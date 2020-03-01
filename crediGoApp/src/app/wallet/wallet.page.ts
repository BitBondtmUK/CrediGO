import { Component, OnInit } from '@angular/core';
import { ObtenerSaldoService } from '../services/obtener-saldo.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  NumCuenta: any;
  saldoActivo: any;

  slideOpts = {
    initialSlide: 0,
    speed: 100
  };

  constructor(private saldo: ObtenerSaldoService) {
    this.saldo.getSaldo()
        .subscribe((data: any) => {
          console.log('Account',data.accountBalance.accountNumber);
          this.NumCuenta = data.accountBalance.accountNumber;
          console.log('Saldo:',data.accountBalance.available);
          this.saldoActivo = data.accountBalance.available;
        });
  }

  ngOnInit() {
  }

}
