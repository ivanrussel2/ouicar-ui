import { Component, OnInit } from '@angular/core';
import { Utilisateur, Vehicule } from 'src/app/_shared/user.type';
import { CarService } from '../../../_services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars?:Vehicule[] ;
  authUser?:Utilisateur;
  constructor(private carService:CarService){}
  ngOnInit(): void {
  if(this.authUser){
    this.carService.getCars(this.authUser).subscribe(
      (cars)=>this.cars = cars
    );
    console.log(this.cars);
    
  }
    
  }
}
