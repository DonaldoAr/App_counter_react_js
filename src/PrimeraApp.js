// Funtional Components
// imr  
import React from 'react';

const PrimeraApp = ()=>{

    return (
        // Envolverse en un  <div></div> para evitar errores
        // When uses a <div></div> it happens that will have a several information
        // we should uses a fragment instead
        //<div>
        //<Fragment >
        // <></> this is a fragment
        <> 
            <h1> Hola mundo </h1>
            <p>Mi primera apli</p>
        </>
        //</Fragment>
        //</div>
        );
}

export default PrimeraApp;