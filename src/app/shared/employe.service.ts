import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Employe} from "./employe.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  selectedEmploye : Employe;
  employes : Employe[]; // => we will save all the employees from mongoDb collection
  readonly baseURL = 'htp://localhost:3000/employes';
  // l'url de nosemployes sur node

  constructor( public  http : HttpClient ) { }

  postEmploye(emp : Employe) {
    return this.http.post(this.baseURL,emp);   // emp is the jsonn object of new employe by calling method post from httpclient object

}
}
