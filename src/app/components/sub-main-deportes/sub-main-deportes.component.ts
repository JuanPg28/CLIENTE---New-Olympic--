import { Component, Input ,OnInit } from '@angular/core';
import { Deportes } from 'src/app/models/deportes.model';
import { SDeportesService } from 'src/app/services/s-deportes.service';

@Component({
  selector: 'app-sub-main-deportes',
  templateUrl: './sub-main-deportes.component.html',
  styleUrls: ['./sub-main-deportes.component.css']
})
export class SubMainDeportesComponent implements OnInit {

  deportes:Deportes[] = Array<Deportes>();

  constructor(private servicioDeportes:SDeportesService) { }

  ngOnInit(): void {
    this.servicioDeportes.getDeportes().subscribe(
      deportes =>{
        this.deportes = deportes;
      }
    )
  }

  gestionarDeporte(deporte:any) {
    console.log("Gestionando deporte: " + deporte);
  }


}
