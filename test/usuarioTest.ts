import { expect } from 'chai';
import { Usuario } from '../usuario';

describe('Usuario', () => {
 
    it('1.1 Agregar un album con un nombre', () => {
        let usuario = new Usuario();
        usuario.agregarAlbum("Album 1");
        
        
        expect(usuario.getAlbum().length).to.equal(1);
    });  
});
describe('Usuario', () => {

    it('1.2 Quitar un album por el nombre', () => {
        let usuario = new Usuario();
        usuario.agregarAlbum("Album 1");
        usuario.agregarAlbum("Album 2");
        usuario.agregarAlbum("Album 3");
        
        var tamanioDelArray = usuario.getAlbum().length;
        usuario.quitarAlbum("Album 1");
        
        expect(usuario.getAlbum().length).to.equal(2);
    });  
});
describe('Usuario', () => {
 
    it('1.3 Obtener un album por el nombre', () => {
        let usuario = new Usuario();
        usuario.agregarAlbum("Album 1");
        usuario.agregarAlbum("Album 2");
        usuario.agregarAlbum("Album 3");
        usuario.agregarAlbum("Album 4");
        usuario.agregarAlbum("Album Pepe Grillo");

        var nombre = usuario.obtenerAlbumPorNombre("Album Pepe Grillo").getNombre();

        expect(nombre).to.equal("Album Pepe Grillo");
    });  
});

describe('Usuario', () => {
 
    it('1.4 No agregar albumes con el mismo nombre', () => {
        let usuario = new Usuario();
        usuario.agregarAlbum("Album 1");
        usuario.agregarAlbum("Album 2");
        usuario.agregarAlbum("Album 3");
        usuario.agregarAlbum("Album 4");
        usuario.agregarAlbum("Album 2");
        usuario.agregarAlbum("Album 3");

        var tamanioDelArray = usuario.getAlbum().length;

        expect(tamanioDelArray).to.equal(4);
    });  
});
describe('Usuario', () => {

    it('1.5 No Quitar un album que no exista', () => {
        let usuario = new Usuario();
        usuario.agregarAlbum("Album 1");
        usuario.agregarAlbum("Album 2");
        usuario.agregarAlbum("Album 3");
        
        usuario.quitarAlbum("Album 4");
        
        expect(usuario.getAlbum().length).to.equal(3);
    });  

});
describe('Usuario', () => {
 
    it('1.6 Agregar 10 albums con nombre "Album X"', () => {
        let usuario = new Usuario();


        usuario.agregar10Albums();
        
        
        expect(usuario.getAlbum().length).to.equal(10);
        expect(usuario.obtenerAlbumPorNombre("Album 10").getNombre()).to.equal("Album 10");
        
    });  
});
describe('Usuario', () => {
 
    it('1.7 Quitar album 4 despues de agregar 10 albums"', () => {
        let usuario = new Usuario();


        usuario.agregar10Albums();
        
        usuario.quitarAlbum("Album 4");

        expect(usuario.getAlbum().length).to.equal(9);

        
        
    });  
});

describe('Usuario', () => {
 
    it('1.8 Agregar imagen en un album segun el nombre"', () => {
        let usuario = new Usuario();

        usuario.agregar10Albums();

        usuario.agregarImagenEnAlbum("fotoperfil1.jpg", "Album 7");

        expect(usuario.obtenerAlbumPorNombre("Album 7").obtenerImagenPorNombre("fotoperfil1.jpg")).to.equal("fotoperfil1.jpg");
        
        
    });  
});
describe('Usuario', () => {
 
    it('1.9 Eliminar imagen de un album segun el nombre"', () => {
        let usuario = new Usuario();

        usuario.agregar10Albums();

        usuario.agregarImagenEnAlbum("fotoperfil1.jpg", "Album 7");
        usuario.agregarImagenEnAlbum("fotoperfil2.jpg", "Album 7");
        usuario.agregarImagenEnAlbum("fotoperfil3.jpg", "Album 7");

        usuario.quitarImagenEnAlbum("fotoperfil3.jpg", "Album 7");

        expect(usuario.obtenerAlbumPorNombre("Album 7").getImagenes().length).to.equal(2);
        expect(usuario.obtenerAlbumPorNombre("Album 7").obtenerImagenPorNombre("fotoperfil1.jpg")).to.equal("fotoperfil1.jpg");
        expect(usuario.obtenerAlbumPorNombre("Album 7").obtenerImagenPorNombre("fotoperfil2.jpg")).to.equal("fotoperfil2.jpg");

    });  
});

describe('Usuario', () => {
 
    it('1.10 Asignar una foto del album como caratula', () => {
        let usuario = new Usuario();

        usuario.agregar10Albums();

        usuario.agregarImagenEnAlbum("fotoperfil1.jpg", "Album 7");
        usuario.agregarImagenEnAlbum("fotoperfil2.jpg", "Album 7");
        usuario.agregarImagenEnAlbum("fotoperfil3.jpg", "Album 7");

        usuario.obtenerAlbumPorNombre("Album 7").agregarCaratula("fotoperfil3.jpg");

        expect(usuario.obtenerAlbumPorNombre("Album 7").getCaratula()).to.equal("fotoperfil3.jpg");
        
        
    });  
});
describe('Usuario', () => {
 
    it('1.11 Asignar su imagen de perfil del album "Fotos de Perfil"', () => {
        let usuario = new Usuario();

        usuario.agregarAlbum("Fotos de Perfil");
        
        usuario.agregarImagenEnAlbum("fotoperfil1.jpg", "Fotos de Perfil");
        usuario.agregarImagenEnAlbum("fotoperfil2.jpg", "Fotos de Perfil");
        usuario.agregarImagenEnAlbum("fotoperfil3.jpg", "Fotos de Perfil");

        usuario.asignarFotoDePerfil("fotoperfil3.jpg");


        expect(usuario.getImagen()).to.equal("fotoperfil3.jpg");
        
        
    });  
});