const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 456456,
        lat: 12.4554,
        lng: 45.3242,
    },
};

//console.table(persona);



//Para hacer un clon del objeto

const persona2 = {...persona};
persona2.nombre = 'Peter';


console.log(persona);
console.log(persona2);