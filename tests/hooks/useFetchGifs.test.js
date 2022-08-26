import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


describe('Pruebas sobre el hook useFetchGifs', () => {   
    
    test('Debe de regresar el estado inicial', () => {  
        
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        // console.log(result);
        const {images,isLoading} = result.current;

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy();
    });
    test('Debe de retornar un arreglo de imagenes y isLoading en False', async() => {  
        
        const { result } = renderHook(() => useFetchGifs('One Punch'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            );
        // console.log(result);
        const {images,isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
})