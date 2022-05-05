export class Noticias {
    identificador: number;
    titulo: string;
    fecha: string;
    noticia: string;
    imagen_noticia: string;
    

    constructor(identificador: number, titulo: string, fecha: string, noticia: string, imagen_noticia: string){
        this.identificador=identificador;
        this.titulo=titulo;
        this.fecha=fecha;
        this.noticia=noticia;
        this.imagen_noticia=imagen_noticia;
        
    }
}