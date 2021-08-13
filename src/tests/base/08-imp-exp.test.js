import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';

describe('Prueba en funciones de heroes',()=>{

    test('Should be return an id hero', () =>{
        const id = 2;
        const heroe = getHeroeById( id );
        
        const heroData = heroes.find( h=> h.id === id);
        
        expect(heroe).toEqual(heroData);

    });

    test('Should be return undefined if heroe doest exist', () =>{
        const id = 6;
        const heroe = getHeroeById( id );
        // undefined it's a primitive data hence we can use a toBe()
        expect(heroe).toBe(undefined);
    });

    test('It shoul be return an array with DC heroes',()=>{
        const owner = "DC";
        const studio = getHeroesByOwner( owner );

        const studioData = heroes.filter( he => he.owner === owner);
        expect(studio).toEqual(studioData);
    });

    test('It should be return an array with Marvel heroe',()=>{
        const owner = 'Marvel';
        const num_heroe = getHeroesByOwner( owner ).length;

        const num_studioData = heroes.filter( he=> he.owner === owner).length;
        
        expect(num_heroe).toBe(num_studioData);
    });
})