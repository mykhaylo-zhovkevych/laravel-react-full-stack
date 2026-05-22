import {createContext} from 'react';

export const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
});
