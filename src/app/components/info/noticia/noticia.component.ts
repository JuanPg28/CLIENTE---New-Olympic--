import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Noticias } from 'src/app/models/noticias.model';
import { DetalleNoticiaService } from 'src/app/services/detalle-noticia.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  @Output() noticiaSeleccionada= new EventEmitter<Noticias>();

  @Input() noticia:Noticias = new Noticias(0, "", "", "", "");

  constructor(private servicioDetalle:DetalleNoticiaService) { 
  }

  ngOnInit(): void {
  }

  enviarNotiSeleccionada(noti:any) {
    this.servicioDetalle.setNoticia(noti);
  }

}
