import { combineReducers } from 'redux';
import {inputReducer} from '../state/input/index';

export const makeReducer = () => {
    return combineReducers({
        ...inputReducer,
    });
};