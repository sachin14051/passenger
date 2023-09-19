import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from '../../module/module';
import { PassengerService } from '../../service/passenger.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent implements OnInit {
 passArray !:Array<Ipassenger>
  constructor(private _passengerServive:PassengerService) { }

  ngOnInit(): void {
    this.passArray = this._passengerServive.getAllPassenger()
  }

}
