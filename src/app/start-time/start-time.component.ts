import {Component,EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-start-time',
  templateUrl: './start-time.component.html',
  styleUrls: ['./start-time.component.css']
})
export class StartTimeComponent implements OnInit {

  constructor() { }
  @Input("time")
  timer:number = 0;

  startTime: any ;

  @Output()
  finish = new EventEmitter<boolean>();

  isCountDown(){
    if (this.timer ===0) {
      this.stop();
      this.finish.emit(true);
    }

  }

  get timer1(){
    return this.timer
  }
  set timer1(value:number){
   const v= Number(value)
    if (Number.isNaN(v)) this.timer =8
    else  this.timer = value;
  }

  ngOnInit(): void {
  }

  start(){

    this.startTime = setInterval(() =>{
      if (this.timer >0) {
        console.log("thoi gian dang troi qua");
        this.timer--;
        this.isCountDown()
      }
      else {
        console.log("ket thuc");
        this.stop();
      }

    }, 1000)
  }

  stop(){
    clearInterval(this.startTime)

  }

}
