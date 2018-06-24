import {handleActions} from "redux-actions";
import * as actions from './actions';

import {NAME_SPACE as NS} from "./Constants";
const handlers = {
    [actions.setValue]: (state, { payload }) => Object.assign({}, state, {
        value: payload.value
    }),
    [actions.setError]: (state, { payload }) => Object.assign({}, state, {
        error: payload.error,
        validAddress: payload.validAddress
        }),
    [actions.setValid]: (state,{ payload }) => Object.assign({}, state, {
        error: undefined,
        validAddress: payload.validAddress
    }),
    [actions.resetError]: (state) => Object.assign({}, state, {
        error: undefined,
        validAddress: undefined
    }),
    [actions.closeAlert]: (state) => Object.assign({}, state, {
        validAddress: undefined
    })

};

const initialState = {};

export const inputReducer = { [NS]: handleActions(handlers, initialState) };
