import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
    categoryReducer,
    todoReducer,
    filterReducer
} from '../state';
import {commonReducer} from "../state";




export const ROUTER_REDUCER = 'router';

export const makeReducer = () => {


        return combineReducers({
            [ROUTER_REDUCER]: routerReducer,
            ...categoryReducer,
            ...todoReducer,
            ...filterReducer,
            ...commonReducer
        });

};