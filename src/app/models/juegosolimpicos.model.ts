export class JuegosOlimpicos {
    identificador: number;
    anyo: number;
    ciudad: string;
    nombre_olimpico: string;
    logo_olimpico: string;
    descripcion: string;

    constructor(identificador: number, anyo: number, ciudad: string, nombre_olimpico: string, logo_olimpico: string, descripcion: string){
        this.identificador=identificador;
        this.anyo=anyo;
        this.ciudad=ciudad;
        this.nombre_olimpico=nombre_olimpico;
        this.logo_olimpico=logo_olimpico;
        this.descripcion=descripcion;
    }
}