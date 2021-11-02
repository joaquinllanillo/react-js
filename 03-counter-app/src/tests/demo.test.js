

describe('Pruebas en el archivo demo.test.js', () => {


    test('Deben ser iguales los Strings', () => {

        //1. Inicialización
        const mensaje = 'Hola mundo';

        //2. Estímulo
        const mensaje2 = 'Hola mundo';

        //3. Observación del comportamiento
        expect(mensaje).toBe(mensaje2); //toBe sería equivalente al operador ===

      
    
    })

});






