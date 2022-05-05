import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Noticias } from '../models/noticias.model';

@Injectable({
  providedIn: 'root'
})
export class SNoticiasService {

  detalleNoticia:Noticias;

  noticias: Observable<Noticias[]> = new Observable();

  constructor(private clienteHttp: HttpClient) { 
    this.detalleNoticia = new Noticias(0,"","","","");
  }

  getNoticias(): Observable<Noticias[]> {
    console.log("Obteniendo noticias del WS");
    this.noticias = this.clienteHttp.get<Noticias[]>("http://localhost:8081/noticiasJSON")
    return this.noticias;
  }

  getDetalleNoticia() {
    return this.detalleNoticia;
  }

  setDetalleNoticia(detalleNoticia:Noticias) {
    this.detalleNoticia.titulo=detalleNoticia.titulo;

  }

}
