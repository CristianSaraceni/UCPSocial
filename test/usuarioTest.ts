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