
// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;


export const getUser = () => ({
        uid: 'ABC123',
        username: 'Luis'
});

// Tarea
export const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})


