import { EventEmitter, Injectable, Output } from '@angular/core';
import { Atletas } from '../models/atletas.model';

@Injectable({
  providedIn: 'root'
})
export class DetalleAtletaService {

  @Output() modificarDetalleEvent: EventEmitter<Atletas>;
  atleta:Atletas = new Atletas(0,"","","","","","");

  constructor() { 
    this.modificarDetalleEvent = new EventEmitter<Atletas>();
  }

  setAtleta(atleta:Atletas) {
    this.atleta = atleta;
    this.modificarDetalleEvent.emit(this.atleta);
  }
}
