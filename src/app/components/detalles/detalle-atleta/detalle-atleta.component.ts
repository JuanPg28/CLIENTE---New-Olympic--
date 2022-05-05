import { Component, OnInit } from '@angular/core';
import { Atletas } from 'src/app/models/atletas.model';
import { DetalleAtletaService } from 'src/app/services/detalle-atleta.service';

@Component({
  selector: 'app-detalle-atleta',
  templateUrl: './detalle-atleta.component.html',
  styleUrls: ['./detalle-atleta.component.css']
})
export class DetalleAtletaComponent implements OnInit {

  atleta: Atletas = new Atletas (0,"","","","","","");

  constructor(private detalleServiAtle: DetalleAtletaService) { }

  ngOnInit(): void {
    this.detalleServiAtle.modificarDetalleEvent.subscribe((atleta) => {
      this.atleta = atleta;
    });
  }

  limpiar():void {
    this.atleta = new Atletas (0,"","","","","","");
  }

}
