import { Component, Input, OnInit, Output } from '@angular/core';
import { JuegosOlimpicos } from 'src/app/models/juegosolimpicos.model';
import { SJuegosolimpicosService } from 'src/app/services/s-juegosolimpicos.service';

@Component({
  selector: 'app-sub-main-juegosolimpicos',
  templateUrl: './sub-main-juegosolimpicos.component.html',
  styleUrls: ['./sub-main-juegosolimpicos.component.css']
})
export class SubMainJuegosolimpicosComponent implements OnInit {

  filterPost = "";

  posts:JuegosOlimpicos[] = new Array<JuegosOlimpicos>();

  juegosolimpicos:JuegosOlimpicos[] = new Array<JuegosOlimpicos>();

  @Input() juegoolimpico:JuegosOlimpicos = new JuegosOlimpicos(0,0,"","","","");

  constructor(private servicioJuegosOlimpicos:SJuegosolimpicosService) { }

  ngOnInit(): void {
    this.servicioJuegosOlimpicos.getJuegosOlimpicos().subscribe(
      juegosolimpicos =>{
        this.juegosolimpicos = juegosolimpicos;
      }
    )
  }
}
