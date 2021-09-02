
import {  getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";



describe('Pruebas con promesas',()=>{
    test('getHeroeByIdAsync should be return a async hero',( done)=>{
        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {
                /*
                    When there are not a expect() function or done() it cause an error
                */
               // It's very important when we work with sichronous
                //expect( true ).toBe( false );
                //done();
                expect( heroe).toBe( heroes[0] );
                done();
            })
    });

    test('It should be to get a error if the heroe does not exist', (done)=>{
        const id = 10;
        getHeroeByIdAsync( id )
            .catch( error =>{
                expect( error ).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
});