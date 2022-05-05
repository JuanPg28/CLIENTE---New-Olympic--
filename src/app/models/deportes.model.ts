export class Deportes {
    identificador: number;
    nombre_deporte: string;
    descripcion: string;
    mejores_atletas: string;
    icono_deporte: string;
    

    constructor(identificador: number, nombre_deporte: string, descripcion: string, mejores_atletas: string, icono_deporte: string){
        this.identificador=identificador;
        this.nombre_deporte=nombre_deporte;
        this.descripcion=descripcion;
        this.mejores_atletas=mejores_atletas;
        this.icono_deporte=icono_deporte;
        
    }
}