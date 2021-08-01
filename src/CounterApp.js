// rafcp

import React, {useState} from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {
    
    const [counter, setCounter] = useState(1); // Returns a two valors
    
    
    // handleAdd for click funtion
    const handleAdd = () => {
        //setCounter(counter + 1);
        setCounter( (c)=> c+1); // When u don't have access to variables lika a counter
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={
                            handleAdd // Reference that we need to execute
                            }>+1</button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;

