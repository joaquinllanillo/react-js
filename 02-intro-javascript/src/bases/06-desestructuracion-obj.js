//Desestructuración
//Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado',
};

//const {edad, clave, nombre, } = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

const useContext = ({clave, nombre, edad, rango = 'Capitán'}) => {
   // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.3456,
            lng: -45.1234,
        }
    }
}

const {nombreClave, anios, latlng: {lat, lng}} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);