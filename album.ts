export class Album {
    private imagenes: Array<String>;
    private nombre: String;


    constructor(nombre: String) {
        this.setNombre(nombre);
    }

    private setNombre (nombre : String) {
        this.nombre = nombre;
    }
     
    public getNombre() : String {
        return this.nombre;
    }

    private setImagenes (imagen : String) {
        this.imagenes.push(imagen);
    }
     
    public getImagenes() : Array<String> {
        return this.imagenes;
    }
    
}