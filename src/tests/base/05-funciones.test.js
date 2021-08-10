import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";


describe('Pruebas en 05-funciones',()=>{
    test('getUser, debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'Luis'
        }
        const user = getUser();

        // expect( user ).toBe( userTest);
        /* When you uses to comparate a two object we must uses a toEqual
        and don't uses a toBe, because {}==={} this is not the same localized
        in the same direcction in memory */
        expect( user ).toEqual( userTest ); // The two object have the same properties
    })
    // getUsuarioActivo debe de retornar un objeto
    test('getUsuarioActivo debe de retornar un objeto', ()=>{
        
        const objetoTest = {
            uid: 'ABC567',
            username: 'Luis'
        }
        expect( getUsuarioActivo('Luis') ).toEqual(objetoTest);
    });
});