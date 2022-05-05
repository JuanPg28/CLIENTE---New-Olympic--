export class Atletas {
    identificador: number;
    nombre: string;
    nacionalidad: string;
    bandera: string;
    medallas: string;
    bibliografia: string;
    foto_atleta: string;
    

    constructor(identificador: number, nombre: string, nacionalidad: string, bandera: string, medallas: string, bibliografia: string, foto_atleta: string){
        this.identificador=identificador;
        this.nombre=nombre;
        this.nacionalidad=nacionalidad;
        this.bandera=bandera;
        this.medallas=medallas;
        this.bibliografia=bibliografia;
        this.foto_atleta=foto_atleta;
        
    }
}