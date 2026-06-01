import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactorialService {

  calcularFactorial(num: number): number {
    if (num < 0) return 0;
    if (num === 0 || num === 1) return 1;
    
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
      resultado *= i;
    }
    return resultado;
  }
}