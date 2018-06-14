import {handleActions} from "redux-actions";
import {NAME_SPACE as NS} from './constants';
import * as actions from './actions'

const handlers = {

    [actions.selectCategory]: (state, { payload }) => Object.assign({}, state, {
        selectedCategory : payload.categoryId
    }),
};

  export let initialState = {};



export const categoryReducer = { [NS]: handleActions(handlers, initialState) };