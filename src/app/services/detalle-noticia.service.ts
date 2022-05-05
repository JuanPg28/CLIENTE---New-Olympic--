import { EventEmitter, Injectable, Output } from '@angular/core';
import { Noticias } from '../models/noticias.model';

@Injectable({
  providedIn: 'root'
})
export class DetalleNoticiaService {

  @Output() modificarDetalleEvent: EventEmitter<Noticias>;
  noticia:Noticias = new Noticias(0,"","","","");

  constructor() { 
    this.modificarDetalleEvent = new EventEmitter<Noticias>();
  }

  setNoticia(noticia:Noticias) {
    this.noticia = noticia;
    this.modificarDetalleEvent.emit(this.noticia);
  }
}
