import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Atletas } from 'src/app/models/atletas.model';
import { DetalleAtletaService } from 'src/app/services/detalle-atleta.service';

@Component({
  selector: 'app-atleta',
  templateUrl: './atleta.component.html',
  styleUrls: ['./atleta.component.css']
})
export class AtletaComponent implements OnInit {

  @Output() atletaSeleccionada= new EventEmitter<Atletas>();

  @Input() atleta:Atletas = new Atletas(0, "", "", "", "","","");

  constructor(private servicioDetalleAtleta:DetalleAtletaService) { 
    
  }

  ngOnInit(): void {
  }

  enviarAtleSeleccionada(atle:any) {
    this.servicioDetalleAtleta.setAtleta(atle);
  }

}
