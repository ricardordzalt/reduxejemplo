import { types } from "../types/types";

export const startLogin = (user, password) => {
    return dispatch => {
        dispatch(loadingAuth());
        setTimeout(() => {
            dispatch(login(user));
        }, 1500);
    };
};

export const startLogout = () => {
    return dispatch => {
        dispatch(loadingAuth());
        setTimeout(() => {
            dispatch(logout());
        }, 4000)
    };
};


export const login = (userName) => ({
    type: types.login,
    payload: userName
});

export const logout = () => ({
    type: types.logout
});

export const loadingAuth = () => ({
    type: types.loadingAuth
});