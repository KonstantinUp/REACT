import { combineReducers } from 'redux';

import {Reducer} from '../task/reducer';


export const makeReducer = () => {

    return combineReducers({

        ...Reducer,

    });
};