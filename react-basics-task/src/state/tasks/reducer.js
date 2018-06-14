import {handleActions} from "redux-actions";
import * as actions from './actions';

import {NAME_SPACE as NS} from "./constants";
const handlers = {

    [actions.completeTodo]: (state, { payload }) => Object.assign({}, state, {
        [payload.todoId]: {
            completed: true,
        },
    }),
    [actions.turnBackTodo]: (state, { payload }) => Object.assign({}, state, {
        [payload.todoId]: {
            completed: false,
        },
    }),
    [actions.todosStateRefresh]: (state, { payload }) => Object.assign({}, 
        payload
    )
};

const initialState = {};





export const todoReducer = { [NS]: handleActions(handlers, initialState) };

