import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  public number1 : number;
  public number2 : number;
  public result : number;
 
  add(){
      this.result = this.number1 + this.number2
  }
  sub(){
    this.result = this.number1 - this.number2
}
  mul(){
    this.result = this.number1 * this.number2
  }
  div(){
    this.result = this.number1 / this.number2
  }
  constructor() { }

  ngOnInit() {
  }

}
