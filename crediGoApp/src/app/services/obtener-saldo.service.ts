import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObtenerSaldoService {

  constructor(private http: HttpClient) {
    console.log('Obtener saldo funcionando');
  }

  getSaldo() {

    const headers = new HttpHeaders({
      'X-Client': '0425c644a72d4ec7bdf15c5d29b705b6',
      'X-User': 'HACKATON',
      'X-Password': '4d0313fcB8f54387bbfa67Da4E8eb7Ea',
      'x-api-key': 'QoAvB9ddiF9udhlvD5U7818VdwrlqUcd1Jv5Ypqi'
    });

    // tslint:disable-next-line: max-line-length
    return this.http.get('https://mwiuw3q1fj.execute-api.us-east-1.amazonaws.com/dev/v1/sandbox/checking-accounts/balance?accountNumber=4077641447', {headers});
  }

  getMovimientos() {

    const headers = new HttpHeaders({
      'X-Client': '0425c644a72d4ec7bdf15c5d29b705b6',
      'X-User': 'HACKATON',
      'X-Password': '4d0313fcB8f54387bbfa67Da4E8eb7Ea',
      'x-api-key': 'QoAvB9ddiF9udhlvD5U7818VdwrlqUcd1Jv5Ypqi'
    });


    return this.http.get('https://mwiuw3q1fj.execute-api.us-east-1.amazonaws.com/dev/v1/sandbox/checking-accounts/account-statement?accountNumber=4077641447&movementsNumber=2', {headers});
  }
}
