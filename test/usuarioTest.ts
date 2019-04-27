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

    it('1.1 Quitar un album por el nombre', () => {
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
 
    it('1.1 Obtener un album por el nombre', () => {
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
