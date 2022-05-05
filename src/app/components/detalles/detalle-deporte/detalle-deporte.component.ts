import { Component, OnInit } from '@angular/core';
import { Deportes } from 'src/app/models/deportes.model';
import { DetalleDeporteService } from 'src/app/services/detalle-deporte.service';

@Component({
  selector: 'app-detalle-deporte',
  templateUrl: './detalle-deporte.component.html',
  styleUrls: ['./detalle-deporte.component.css']
})
export class DetalleDeporteComponent implements OnInit {

  deporte: Deportes = new Deportes (0,"","","","");
  constructor(private detalleServiDepo: DetalleDeporteService) { 
    
  }

  ngOnInit(): void {
    this.detalleServiDepo.modificarDetalleEvent.subscribe((deporte) => {
      this.deporte = deporte;
    });
  }

  limpiar():void {
    this.deporte = new Deportes (0,"","","","");
  }

}
