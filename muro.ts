//import { Usuario } from './usuario';
import { Publicacion } from './publicacion';
export class Muro {
    private publicaciones: Array<Publicacion>;
    constructor() {
        this.setPublicaciones(new Array<Publicacion>());
    }

    private setPublicaciones(publicacion: Array<Publicacion>){
        this.publicaciones = publicacion;
    }
    public getPublicaciones(): Array<Publicacion>{
        return this.publicaciones;
    }

    public agregarPublicacion(fecha: String, contenido: String){
        let publicacion = new Publicacion(fecha,contenido);
        this.publicaciones.push(publicacion);

    }

} 