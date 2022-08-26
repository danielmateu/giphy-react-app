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
        const onNewCategory = jest.fn() //Jest functions


        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: inputValue}});

        const form = screen.getByRole('form');
        fireEvent.submit(form);
        // screen.debug();
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)

    });

    test('No debe de llamar el onNewCategory si el input está vacío', () => { 

        const onNewCategory = jest.fn() //Jest functions


        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');
        fireEvent.submit(form);
        // screen.debug();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();

    
    })
})