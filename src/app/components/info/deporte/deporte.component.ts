import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Deportes } from 'src/app/models/deportes.model';
import { DetalleDeporteService } from 'src/app/services/detalle-deporte.service';

@Component({
  selector: 'app-deporte',
  templateUrl: './deporte.component.html',
  styleUrls: ['./deporte.component.css']
})
export class DeporteComponent implements OnInit {

  @Output() deporteSeleccionada= new EventEmitter<Deportes>();

  @Input() deporte:Deportes = new Deportes(0, "", "", "", "");

  constructor(private servicioDetalleDeporte:DetalleDeporteService) { }

  ngOnInit(): void {
  }

  enviarDepoSeleccionada(depo:any) {
    this.servicioDetalleDeporte.setDeporte(depo);
  }

}
