import { Album } from './album';
import { Muro } from './muro';
export class Usuario {
    private nombre: String;
    private apellido: String;
    private imagen: String;
    private intereses: String;
    private correo: String;
    private verificado: boolean;
    private verificador: String;
    private albumes: Array<Album>;                                                    
    private muro: Muro; 

    constructor(){
        this.setAlbumes(new Array<Album>());
        this.setMuro(new Muro());
    }
     
    private setNombre (nombre : String) {
        this.nombre = nombre;
    }
    private setApellido (apellido : String) {
        this.apellido = apellido;
    }
    private setImagen (imagen : String) {
        this.imagen = imagen;
    }
    private setIntereses (intereses : String) {
        this.intereses = intereses;
    }
    private setCorreo (correo : String) {
        this.correo = correo;
    }
    private setVerificado (verificado : boolean) {
        this.verificado = verificado;
    }
    private setVerificador (verificador : String) {
        this.verificador = verificador;
    }
    private setMuro(muro: Muro){
        this.muro = muro;
    } 
     
    public getNombre() : String {
        return this.nombre;
    }
    public getApellido() : String {
        return this.apellido;
    }
    public getImagen() : String {
        return this.imagen;
    }
    public getIntereses() : String {
        return this.intereses;
    }
    public getCorreo() : String {
        return this.correo;
    }
    public getVerificado() : boolean {
        return this.verificado;
    }
    public getVerificador() : String {
        return this.verificador;
    }

    public generarEnlaceVerificador(){

        return "demo";

    }
    public getMuro(): Muro{
        return this.muro;
    }

    
    private setAlbumes (album : Array<Album>) {
        this.albumes = album;
    }
     
    public getAlbum() : Array<Album> {
        return this.albumes;
    }

    public agregarAlbum(nombre: String){

        var i;
        var tamanioArray = this.albumes.length;
        var tamanioArrayAux = 0;

        for (i = 0; i < this.albumes.length; i++){
            if (this.albumes[i].getNombre() != nombre ){
                tamanioArrayAux += 1;
            }
        }
        if (tamanioArray == tamanioArrayAux){

            let album = new Album(nombre);

            this.albumes.push(album);

        }

        

    }

    public quitarAlbum(nombre: String){
        var i;
        for (i = 0; i < this.albumes.length; i++){
            if (this.albumes[i].getNombre() == nombre ){
                this.albumes.splice (i, 1);
            }
        }
    }

    public obtenerAlbumPorNombre(nombre: String){
        var i;
        for (i = 0; i < this.albumes.length; i++){
            if (this.albumes[i].getNombre() == nombre ){
                return this.albumes[i];
            }
        }

    }

    public agregar10Albums(){

        var i;
        var nombre;

        

        for (i = 1; i < 11; i++){
        
            nombre = "Album " + i.toString();

            let album = new Album(nombre);

            this.albumes.push(album);

        }

        

    }
    public agregarImagenEnAlbum(nombre: String , album: String){


        this.obtenerAlbumPorNombre(album).agregarImagen(nombre);

    }
    public quitarImagenEnAlbum(nombre: String , album: String){


        this.obtenerAlbumPorNombre(album).quitarImagenPorNombre(nombre);

    }

    public asignarFotoDePerfil(nombre: String){

        var comprobar = this.obtenerAlbumPorNombre("Fotos de Perfil").obtenerImagenPorNombre(nombre);
        
        if(comprobar == nombre){
            this.setImagen(nombre);
        }

    }
    
    public agregarImagenEnAlbumYposicionEspecifica(imagen : String,album : String,posicion : number){

        this.obtenerAlbumPorNombre(album).agregarImagenEnPosicionEspecifica(imagen,posicion);

    }

}