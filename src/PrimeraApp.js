// Funtional Components
// imr  
import React from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ( {saludo, subtitulo} )=>{
    //const saludo = 'hola';
    console.log(saludo);
    return (
        // Envolverse en un  <div></div> para evitar errores
        // When uses a <div></div> it happens that will have a several information
        // we should uses a fragment instead
        //<div>
        //<Fragment >
        // <></> this is a fragment
        <> 
            <h1>{ saludo }</h1>
            {/* <pre> { JSON.stringify(arreglo, null, 3) } </pre> */}
            <p> {subtitulo} </p>
        </>
        //</Fragment>
        //</div>
        );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
// For add a defaults valors 
PrimeraApp.defaultProps = {
    subtitulo: 'Subtitulo'
}

export default PrimeraApp;