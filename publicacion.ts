export class Publicacion {
    private fecha: String;
    private contenido: String;
    constructor(fecha: String , contenido: String) {

        this.setFecha(fecha);
        this.setContenido(contenido);


    }
    private setFecha(fecha: String) {
        this.fecha = fecha;
    }
    public getFecha(): String{

        return this.fecha;

    }
    private setContenido(contenido: String) {
        this.contenido = contenido;
    }
    public getContenido(): String{

        return this.contenido;

    }

} 