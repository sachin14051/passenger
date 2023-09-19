import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from '../../module/module';
import { PassengerService } from '../../service/passenger.service';

@Component({
  selector: 'app-pass-cards',
  templateUrl: './pass-cards.component.html',
  styleUrls: ['./pass-cards.component.scss']
})
export class PassCardsComponent implements OnInit {
 @Input() passdata !:Ipassenger;
 isEdit: boolean=false;
 
  constructor(private _PassengerService :PassengerService) { }

  ngOnInit(): void {
  }

  onEdit(id:number){
    this.isEdit = true
    console.log("edit")
  }

  onDone(id:number, fname :string){
   this.isEdit=false;
   console.log(fname)
  
    this._PassengerService.passengerArray.filter(ele =>{
          if(ele.id === id){
            ele.fullname = fname
          }
   })



  }


  onDelete(id:number){
    this._PassengerService.getSingleUser(id)
  
  }
  
}
