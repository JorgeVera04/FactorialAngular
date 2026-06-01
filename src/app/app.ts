import { Component } from '@angular/core';
import { FactorialComponent } from './components/factorial/factorial'; // <-- Apunta al nuevo componente

@Component({
  selector: 'app-root',
  imports: [FactorialComponent], // <-- Cargamos FactorialComponent
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}