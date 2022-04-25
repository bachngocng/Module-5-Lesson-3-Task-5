import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  operandA: number;
  operandB: number;
  result: number;
  constructor() { }

  ngOnInit() {
  }
  add() {
    return this.result = this.operandA + this.operandB;
  }
  sub() {
    return this.result = this.operandA - this.operandB;
  }
  multiple() {
    return this.result = this.operandA * this.operandB;
  }
  div() {
    return this.result = this.operandA / this.operandB;
  }
}
