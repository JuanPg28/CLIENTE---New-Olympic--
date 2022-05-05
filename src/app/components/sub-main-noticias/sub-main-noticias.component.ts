import { Component, OnInit} from '@angular/core';
import { Noticias } from 'src/app/models/noticias.model';
import { SNoticiasService } from 'src/app/services/s-noticias.service';

@Component({
  selector: 'app-sub-main-noticias',
  templateUrl: './sub-main-noticias.component.html',
  styleUrls: ['./sub-main-noticias.component.css']
})
export class SubMainNoticiasComponent implements OnInit {

  noticias:Noticias[] = Array<Noticias>();

  constructor(private servicioNoticias:SNoticiasService) { }

  ngOnInit(): void {
    this.servicioNoticias.getNoticias().subscribe(
      noticias =>{
        this.noticias = noticias;
      }
    )
  }

  gestionarNoticia(noticia:any) {
    console.log("Gestionando noticia: " + noticia);
  }

}
