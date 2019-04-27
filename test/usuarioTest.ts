import { expect } from 'chai';
import { Usuario } from '../usuario';

describe('Usuario', () => {
    /*it('Debe crear un usuario', () => {
        let usuario = new Usuario();
        expect(usuario.generarEnlaceVerificador()).to.equal("demo");
    });*/
    it('1.1 Agregar un album con un nombre', () => {
        let usuario = new Usuario();
        usuario.agregarAlbum("Album 1");
        
        
        expect(usuario.getAlbum().length).to.equal(1);
    });  
});
/*describe('Usuario', () => {
    it('Debe crear otro usuario', () => {
        let usuario = new Usuario();
        expect(usuario.generarEnlaceVerificador()).to.equal("demo");
    });  
});*/