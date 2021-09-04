// rafcp
import React, {useState} from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({value = 10}) => {
    const [counter, setCounter] = useState( value ); // Returns a two valors
    //const [reset, setReset] = useState( value);
    //const [rest, setRest] = useState(value);
    
    // handleAdd for click funtion
    
    const handleAdd = () => {
        //setCounter(counter + 1);
        setCounter( (c)=> c+1); // When u don't have access to variables lika a counter   
    }
    const handleReset = () =>setCounter(value);
    const handleSustract = () =>setCounter((c)=>c-1);
    
    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={
                            handleAdd // Reference that we need to execute
                            }>+1</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleSustract}>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;

