import {handleActions} from "redux-actions";
import {actions, NAME_SPACE as NS} from './constants';

const handlers = {

    [actions.SHOW_DONE]: (state) => Object.assign({}, state, {
        showDoneTasks: true,
    }),
    [actions.SHOW_ALL]: (state) => Object.assign({}, state, {
        showDoneTasks: false,
    })
};

const initialState = {};

export const filterReducer = {[NS]: handleActions(handlers, initialState)};