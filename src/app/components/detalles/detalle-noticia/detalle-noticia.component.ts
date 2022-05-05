import { Component, OnInit } from '@angular/core';
import { Noticias } from 'src/app/models/noticias.model';
import { DetalleNoticiaService } from 'src/app/services/detalle-noticia.service';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.css']
})
export class DetalleNoticiaComponent implements OnInit {

  noticia: Noticias = new Noticias (0,"","","","");
  constructor(private detalleServi: DetalleNoticiaService) {

  }

  ngOnInit(): void {
    this.detalleServi.modificarDetalleEvent.subscribe((noticia) => {
      this.noticia = noticia;
    });
  }

  limpiar():void {
    this.noticia = new Noticias (0,"","","","");
  }

}
