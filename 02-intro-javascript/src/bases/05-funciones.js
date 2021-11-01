//Funciones en JS
//Esta forma de función no es recomendable
//function saludar(nombre){
//    return `Hola. ${nombre}`;
//}
//Lo correcto es asignarla a una constante
//const saludar = function(nombre){
//    return `Hola. ${nombre}`;
//}

const saludar2 = (nombre) =>{
    return `Hola. ${nombre}`;
}
//Para cuando solo se tiene un return en la función
const saludar3 = (nombre) => `Hola. ${nombre}`;
//Para cuando no se reciben parametros
const saludar4 = () => `Hola mundo`;

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_papi1502'
});

console.log(getUser());

//TAREA
//1. Transformar a una función de flecha
//2. Tiene que retornar un objeto implícito
//3. Pruebas

const getUsuarioActivo = (nombre) => ({
        uid: 'ABC567',
        username: nombre,
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);