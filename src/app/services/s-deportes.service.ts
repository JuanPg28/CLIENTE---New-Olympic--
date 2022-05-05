import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Deportes } from '../models/deportes.model';

@Injectable({
  providedIn: 'root'
})
export class SDeportesService {

  detalleDeporte:Deportes;

  deportes: Observable<Deportes[]> = new Observable();

  constructor(private clienteHttp: HttpClient) {
    this.detalleDeporte = new Deportes(0,"","","","");
   }

  getDeportes(): Observable<Deportes[]> {
    console.log("Obteniendo deportes del WS");
    this.deportes = this.clienteHttp.get<Deportes[]>("http://localhost:8081/deportesJSON")
    return this.deportes;
  }

  getDetalleDeporte() {
    return this.detalleDeporte;
  }

  setDetalleDeporte(detalleDeporte:Deportes) {
    this.detalleDeporte.nombre_deporte=detalleDeporte.nombre_deporte;

  }
}
