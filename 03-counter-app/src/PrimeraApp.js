import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


//Functional Components

const PrimeraApp = ({saludo, subtitulo}) => {

    return (
        <Fragment>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </Fragment>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;