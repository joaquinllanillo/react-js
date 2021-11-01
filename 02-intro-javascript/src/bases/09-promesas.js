import {getHeroeById, getHeroesByOwner} from './bases/08-imports-exports';

// const promesa = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         const heroe = getHeroeById(3);
//         resolve(heroe);
//         reject('No se pudo encontrar el heroe');
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log('Heroe', heroe);
// })
// .catch( error => console.warn(error));

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }
            else{
                reject('No se pudo encontrar el heroe');
            }
            
        }, 2000);
    });
}

getHeroeByIdAsync(40)
    .then( heroe => console.log('Heroe', heroe))
    .catch(error => console.warn(error));
