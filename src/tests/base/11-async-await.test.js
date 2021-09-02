import { getImagen } from "../../base-pruebas/11-async-await";


describe('Pruebas con async-await y Fetch',()=>{
    test('It should be return a url from image', async()=>{
        const url = await getImagen();
        console.log(url);
        //expect( typeof url ).toBe('string');
        //expect( url.includes('http://') ).toBe(true);

    });
});