import React, { Fragment, useState} from "react";
import PropTypes from 'prop-types';

//Functional Component CounterApp
const CounterApp = ({value = 0}) => {

    const [counter, setCounter] = useState(value);

    //HandleAdd
    const handleAdd = () => {
        setCounter(counter + 1);
    }

    //HandleSubstract
    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    //HandleReset
    const handleReset = () => {
        setCounter(value);
    }

    return (
        <Fragment>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick = {handleSubstract}>-1</button>
            <button onClick = {handleReset}>Reset</button>
            <button onClick = {handleAdd}>+1</button>
        </Fragment>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;