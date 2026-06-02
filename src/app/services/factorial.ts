import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactorialService {

  calcularFactorial(num: number): bigint {
    if (num < 0) return 0n;

    let resultado = 1n;

    for (let i = 2n; i <= BigInt(num); i++) {
      resultado *= i;
    }

    return resultado;
  }
}
