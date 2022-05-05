import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Atletas } from '../models/atletas.model';

@Injectable({
  providedIn: 'root'
})
export class SAtletasService {

  detalleAtleta:Atletas;

  atletas: Observable<Atletas[]> = new Observable();

  constructor(private clienteHttp: HttpClient) { 
    this.detalleAtleta = new Atletas(0,"","","","","","");
  }

  getAtletas(): Observable<Atletas[]> {
    console.log("Obteniendo atletas del WS");
    this.atletas = this.clienteHttp.get<Atletas[]>("http://localhost:8081/atletasJSON")
    return this.atletas;
  }

  getDetalleAtleta() {
    return this.detalleAtleta;
  }

  setDetalleAtleta(detalleAtleta:Atletas) {
    this.detalleAtleta.nombre=detalleAtleta.nombre;

  }
}
