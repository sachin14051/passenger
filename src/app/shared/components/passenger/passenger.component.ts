import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from '../../module/module';
import { PassengerService } from '../../service/passenger.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent implements OnInit {
 passArray !:Array<Ipassenger>;
 passCount !: number

  constructor(private _passengerServive:PassengerService) { }

  ngOnInit(): void {
    this.passArray = this._passengerServive.getAllPassenger();
     this.getChekdIn()

  }

  getChekdIn(){
  this.passCount =  this.passArray.filter((pass: Ipassenger) => {
      return pass.checkedIn === true
    }).length
  }

}
