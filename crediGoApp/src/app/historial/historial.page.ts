import { Component, OnInit } from '@angular/core';
import { ObtenerSaldoService } from '../services/obtener-saldo.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {



  movimientos: any[] = [];

  constructor(private obtenerService: ObtenerSaldoService) {
    this.obtenerService.getMovimientos()
          .subscribe((data: any) => {
            console.log(data.historicalMovements);
            this.movimientos = data.historicalMovements.movements;
          });
  }

  ngOnInit() {
  }

  // loadData(event) {

  //   setTimeout(() => {

  //     const nuevos = this.movimientos[5];

  //     this.movimientos.push(...nuevos);
  //     event.target.complete();

  //   }, 2000);

  // }


}
