import { combineReducers } from 'redux';
import {Reducer} from '../state/input/index';

export const makeReducer = () => {
    return combineReducers({
        ...Reducer,
    });
};