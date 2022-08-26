import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

const inputValue = 'Saitama';

describe('Pruebas en <AddCategory>', () => { 

    test('Debe de cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: inputValue}});

        // screen.debug();
        expect(input.value).toBe(inputValue);

    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        //TODO: ????

        render(<AddCategory onNewCategory={ () => {} }/>);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: inputValue}});

        const form = screen.getByRole('form');
        fireEvent.submit(form);
        // screen.debug();
        expect(input.value).toBe('');


    })
})