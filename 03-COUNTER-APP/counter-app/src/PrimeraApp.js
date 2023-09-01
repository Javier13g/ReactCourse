import React, {Fragment} from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({data, data2}) => {

    // if( !data) {
    //     throw new Error('Se necesita data');
    // }

    const saludo = 'Una constante compai'
    /*const objeto = {
        nombre: 'Ichigo',
        raza: 'Shinigami'
    }*/
    console.log(data);
    return (
        <Fragment>
            <h1>Un saludo para la que mas come tacos</h1>
            <h3>{saludo}</h3>
            <h3>{data}</h3>
            <h3>{data2}</h3>
            <p>Waoss</p>

        </Fragment>
    );
}


PrimeraApp.propTypes = {
    data: PropTypes.string
}

PrimeraApp.defaultProps = {
    data2: "Default"
}    

export default PrimeraApp;