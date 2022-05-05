import { Component, OnInit } from '@angular/core';
import { Atletas } from 'src/app/models/atletas.model';
import { SAtletasService } from 'src/app/services/s-atletas.service';

@Component({
  selector: 'app-sub-main-atletas',
  templateUrl: './sub-main-atletas.component.html',
  styleUrls: ['./sub-main-atletas.component.css']
})
export class SubMainAtletasComponent implements OnInit {

  atletas:Atletas[] = Array<Atletas>();

  constructor(private servicioAtletas:SAtletasService) { }

  ngOnInit(): void {
    this.servicioAtletas.getAtletas().subscribe(
      atletas =>{
        this.atletas = atletas;
      }
    )
  }

  gestionarAtleta(atleta:any) {
    console.log("Gestionando atleta: " + atleta);
  }

}
