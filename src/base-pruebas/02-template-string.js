


const nombre   = 'Luis1';
const apellido = 'Donaldo';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

// console.log( nombreCompleto );


export function getSaludo(nombre = 'Arias') {
    return 'Hola ' + nombre + '!';
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );