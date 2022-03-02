import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversidadService {

  urisearch:string="http://universities.hipolabs.com/search?country"
  constructor(private http:HttpClient) { }

  getCountry(con:string){
    return this.http.get(this.urisearch+"="+con);
  }
}
