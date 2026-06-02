import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FactorialService } from '../../services/factorial';

@Component({
  selector: 'app-factorial',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './factorial.html',
  styles: [`
    .box-container {
      max-width: 320px;
      margin: 50px auto;
      padding: 25px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-family: sans-serif;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    h2 {
      color: #333;
      margin-top: 0;
      text-align: center;
    }

    .group {
      margin-bottom: 20px;
    }

    .group label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
      color: #555;
    }

    .group input {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }

    .box-resultado {
      margin-top: 20px;
      padding: 15px;
      background-color: #e6f7ff;
      border: 1px solid #91d5ff;
      border-radius: 4px;
      text-align: center;
      overflow-wrap: break-word;
    }

    .box-resultado h3 {
      margin: 5px 0 0 0;
      color: #0050b3;
      font-size: 24px;
    }
  `]
})
export class FactorialComponent {

  numFactorial: number | null = null;
  resultadoFactorial: string = '';

  constructor(private factorialService: FactorialService) {}

  onInputFactorial(): void {
    if (this.numFactorial === null) {
      this.resultadoFactorial = '';
      return;
    }

    this.resultadoFactorial = this.factorialService
      .calcularFactorial(this.numFactorial)
      .toString();
  }
}
