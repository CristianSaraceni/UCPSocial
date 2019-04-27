export class Usuario {
    private nombre: String;
    private apellido: String;
    private imagen: String;
    private intereses: String;
    private correo: String;
    private verificado: boolean;
    private verificador: String;
                                                                                     
    /*constructor(nombre: String,apellido: String,intereses: String, correo: String, verificado: boolean,verificador: String) {
        this.setNombre;
        this.setApellido;
        this.setImagen;
        this.setCorreo;
        this.setVerificado;
        this.setVerificador;
    }*/
    constructor(){
        
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
    

}