import {useContext} from 'react';
import {StateContext} from './StateContext.js';

export const useStateContext = () => useContext(StateContext);
