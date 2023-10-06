import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Utilisateur, Vehicule } from 'src/app/_shared/user.type';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  vehicules:Vehicule[] = [{id:1,immat:'FN34'}]

  constructor() { }

  getCars(authUser:Utilisateur):Observable<Vehicule[]>{
    return of(this.vehicules)
  }
  getCarDetail(){

  }
}
