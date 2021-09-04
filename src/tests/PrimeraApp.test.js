import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
//import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Test about <PrimeraApp />', ()=>{
    /*
    test('It should be give a message "Hola, Luis"', () => {
       const saludo = 'Hola Luis';
       // We need another const for render product
       const wrapper = render( <PrimeraApp saludo = {saludo} />);
        expect( wrapper.getByText(saludo) ).toBeInTheDocument();
    });
    */ 
   test('It should show <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola Luis';
        const wrapper = shallow( <PrimeraApp saludo = {saludo}/>);
        expect( wrapper ).toMatchSnapshot();
   })
   
   test('it should show the subtitle by props', ()=>{
        const saludo = 'Hola Luis';
        const subtitulo = 'Subtitulo2';
        const wrapper = shallow( 
        <PrimeraApp 
            saludo = {saludo}
            subtitulo = {subtitulo}
         />
         );
         // wrapper: has a information the component render
         // Buscate un parrafo
         const textoParrafo = wrapper.find('p').text();
         // console.log(textoParrafo);
         expect( textoParrafo ).toBe( subtitulo );      
   });
});