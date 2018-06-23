import {handleActions} from "redux-actions";
import * as actions from './actions';

import {NAME_SPACE as NS} from "./Constants";
const handlers = {
    [actions.setValue]: (state, { payload }) => Object.assign({}, state, {
        value: payload.value
    }),
    [actions.setError]: (state, { payload }) => Object.assign({}, state, {
         error: payload.error
        }),
    [actions.resetError]: (state) => Object.assign({}, state, {
        error: undefined
    })

};
const initialState = {};

export const Reducer = { [NS]: handleActions(handlers, initialState) };
