import { types } from '../types/types';

export const setError = ( err ) => ({ //err es un string, que es el error a mostrar
    type: types.uiSetError,
    payload: err
});

export const removeError = () => ({
    type: types.uiRemoveError
});

export const startLoading = () => ({
    type: types.uiStartLoading
})
export const finishLoading = () => ({
    type: types.uiFinishLoading
})

