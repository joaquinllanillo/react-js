import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp/>', () => {
    
    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('Debe mostrar <CounterApp/> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el valor por defecto de 100', () => {
        const valor = 100;
        const wrapper = shallow(
            <CounterApp
                value = {valor}
            />
        );
        const valorCounter = wrapper.find('h2').text().trim();
        expect(valorCounter).toBe(valor.toString());
    });

    test('Debe decrementar con el botón -1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });

    test('Debe reiniciar el contador al valor por default', () => {
        const valor = 10;
        const wrapper = shallow(
            <CounterApp
                value = {valor}
            />
        );
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('10');
        console.log(counterText);
    });

    test('Debe incrementar con el botón +1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    });
        
    

})
