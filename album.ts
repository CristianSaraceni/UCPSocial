import { Usuario } from './usuario';

export class Album {
    private imagenes: Array<String>;
    private nombre: String;


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

    public agregarImagen(nombre: String){


        this.imagenes.push(nombre);

     

        

    }

    public obtenerImagenPorNombre(nombre: String){
        var i;
        for (i = 0; i < this.imagenes.length; i++){
            if (this.imagenes[i] == nombre ){
                return this.imagenes[i];
            }
        }

    }
}