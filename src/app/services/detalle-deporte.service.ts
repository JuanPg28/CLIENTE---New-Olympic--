import { EventEmitter, Injectable, Output } from '@angular/core';
import { Deportes } from '../models/deportes.model';

@Injectable({
  providedIn: 'root'
})
export class DetalleDeporteService {

  @Output() modificarDetalleEvent: EventEmitter<Deportes>;
  deporte:Deportes = new Deportes(0,"","","","");

  constructor() { 
    this.modificarDetalleEvent = new EventEmitter<Deportes>();
  }

  setDeporte(deporte:Deportes) {
    this.deporte = deporte;
    this.modificarDetalleEvent.emit(this.deporte);
  }
}
