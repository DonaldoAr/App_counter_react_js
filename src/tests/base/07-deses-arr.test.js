import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('Pruebas de desestructuración',()=>{
    test('Debe de reotornar un string y un numero',()=>{
        // const arr = retornaArreglo(); // ['ABC', 123]
        const [letras, numeros ] = retornaArreglo();
        // expect( arr ).toEqual( ['ABC', 123] );
        // It will be more easy
        expect(letras).toEqual('ABC');
        expect(typeof letras).toBe('string');

    })
})