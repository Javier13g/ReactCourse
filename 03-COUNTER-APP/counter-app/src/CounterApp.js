import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {

    const Counter = 'Desde CounterApp';
    const [counter, setCounter] = useState(0);
    console.log("counter", counter);

    function countNumber() {
        setCounter(counter + 1)
    }
    function resetNumber() {
        setCounter(0)
    }
    function disminutionNumber() {
        setCounter(counter - 1)
    }

    return (
        <>
            <p>{Counter}</p>
            <p>{counter}</p>
            {/* <p>{value}</p> */}
            <button className="button-32" onClick={countNumber}>+</button>
            <button className="button-32" onClick={resetNumber}>Restart</button>
            <button className="button-32" onClick={disminutionNumber}>-</button>
        </>
    );
}


CounterApp.propTypes = {
    value: PropTypes.number
}
CounterApp.defaultProps = {
    value: {}
}

export default CounterApp;