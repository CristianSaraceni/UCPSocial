import { Usuario } from './usuario';

export class Album {
    private imagenes: Array<String>;
    private nombre: String;
    private caratula: String;

    constructor(nombre: String) {
        this.setNombre(nombre);
        this.setImagenes(new Array<String>());
    }

    private setNombre (nombre : String) {
        this.nombre = nombre;
    }
     
    public getNombre() : String {
        return this.nombre;
    }

    private setImagenes (imagen : Array<String>) {
        this.imagenes = imagen;
    }
     
    public getImagenes() : Array<String> {
        return this.imagenes;
    }

    private setCaratula (caratula : String) {
        this.caratula = caratula;
    }
     
    public getCaratula() : String {
        return this.caratula;
    }

    public agregarImagen(nombre: String){


        this.imagenes.push(nombre);
        
        if (this.imagenes.length == 1){
            this.agregarCaratula(nombre);

        }

    }
    public quitarImagenPorNombre(nombre: String){
        var i;
        for (i = 0; i < this.imagenes.length; i++){
            if (this.imagenes[i] == nombre ){
                this.imagenes.splice(i,1);
            }
        }

    }

    public obtenerImagenPorNombre(nombre: String){
        var i;
        for (i = 0; i < this.imagenes.length; i++){
            if (this.imagenes[i] == nombre ){
                return this.imagenes[i];
            }
        }

    }


    public agregarCaratula(caratula : String) {
        this.setCaratula(caratula);
    }
}