import { types } from '../types/types';

const initialState = { //con esto se inicializa
    loading: false,
    msgError: null
}


export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.uiSetError:
            return {
                ...state, //se mantiene el mismo state
                msgError: action.payload //lo que venga aqui es el mensaje de error
            }

        case types.uiRemoveError:
                return {
                    ...state,
                    msgError: null
                }

        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }
 
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }

}
