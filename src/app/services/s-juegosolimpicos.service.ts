import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { JuegosOlimpicos } from '../models/juegosolimpicos.model';

@Injectable({
  providedIn: 'root'
})
export class SJuegosolimpicosService {

  juegosolimpicos: Observable<JuegosOlimpicos[]> = new Observable();

  constructor(private clienteHttp: HttpClient) { }

  getJuegosOlimpicos(): Observable<JuegosOlimpicos[]> {
    console.log("Obteniendo juegos del WS");
    this.juegosolimpicos = this.clienteHttp.get<JuegosOlimpicos[]>("http://localhost:8081/juegosolimpicosJSON")
    return this.juegosolimpicos;
  }
}
