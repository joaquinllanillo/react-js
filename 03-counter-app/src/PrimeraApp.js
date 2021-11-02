import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


//Functional Components

const PrimeraApp = ({saludo}) => {

    // const saludo = 'Hola mundo';
    // const objeto = {
    //     nombre: 'Joaquin',
    //     apellido: 'Llanillo',
    //     telefono: 2727224746,
    //     email: 'joaquinllanillo@gmail.com'
    // }

    return (
        <Fragment>
            <h1>{saludo}</h1>
            {/*<pre>{ JSON.stringify(objeto, null, 3)}</pre>*/}
            <p>Mi primera aplicación con React</p>
        </Fragment>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;