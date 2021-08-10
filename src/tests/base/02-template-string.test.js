import '@testing-library/jest-dom';
import { getSaludo } from "../../base-pruebas/02-template-string";



describe('Pruebas en 02-template-string.js',()=>{
    test('getSaludo debe de retornar hola Luis Donaldo', () => {
        const nombre = 'Luis';
    
        const saludo = getSaludo(nombre);

        expect( saludo ).toBe('Hola ' + nombre+'!');
    })
    
    // getSaludo debe de rotar Hola Arias!, si no hay argumento de nombre

    test('getSaludo debe de rotar Hola Arias!',()=>{
        const saludo = getSaludo();
        expect( saludo ).toBe('Hola '+'Arias'+'!');
    });

});