import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
// import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp/>', () => {
    
    // test('Debe de mostrar el mensaje Hola Soy Goku', () => {
    //     const saludo = 'Hola, Soy Goku';
    //     const {getByText} = render(<PrimeraApp saludo = {saludo}/>); 
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })
    
    test('Debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo = {saludo}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow(
            <PrimeraApp
                saludo = {saludo}
                subtitulo = {subtitulo}
            />
        );
        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);
    });
    
    

    
})
