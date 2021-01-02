import { types } from "../types/types";

const initialState = {
    userName: 'Sin sesión',
    isLogged: false,
    loading: false
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case types.login: 
            return {
                userName: action.payload,
                isLogged: true,
                loading: false
            };
        case types.logout: 
            return {
                userName: '',
                isLogged: false,
                loading: false
            };
        case types.loadingAuth:
            return {
                ...state,
                loading: true
            };
        default: 
            return state;
    };
};

export { reducer };