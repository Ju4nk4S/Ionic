import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {

  constructor(private http:HttpClient) { }
  verEstacionamiento(){
    return this.http.get("https://miestacionamiento-f7b2d-default-rtdb.firebaseio.com/estacionamiento.json");
  }
   verDetalles(cod: String){
    return this.http.get(`https://miestacionamiento-f7b2d-default-rtdb.firebaseio.com/detalle/0/${cod}.json`);
   }
}