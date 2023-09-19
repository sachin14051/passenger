import { Component, OnInit } from '@angular/core';
import { Ipassenger } from '../../module/module';
import { PassengerService } from '../../service/passenger.service';

@Component({
  selector: 'app-pass-count',
  templateUrl: './pass-count.component.html',
  styleUrls: ['./pass-count.component.scss']
})
export class PassCountComponent implements OnInit {
  passName !: Array<Ipassenger>;
  passCount!:number;
  passAllcount!:number;

  constructor(private _PassengerSerive: PassengerService) { }

  ngOnInit(): void {
    this.passName =this._PassengerSerive.getAllPassenger();
    this.passAllcount =this._PassengerSerive.getAllPassenger().length;
    this.passCount = this._PassengerSerive.getAllPassenger().filter(ele =>{
     return  ( ele.checkedIn === true)
    }).length;

  }

}
