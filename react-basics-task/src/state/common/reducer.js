import {handleActions} from "redux-actions";
import * as actions from './actions';
import {NAME_SPACE as NS} from "./constants";

const handlers = {

    [actions.setCategories]: (state, {payload}) => Object.assign({}, state, {
        categories: payload
    }),
    [actions.setInitialCategories]: (state, {payload}) => Object.assign({}, state, {
        initialCategoriesTree:{initialCategories:payload}
    }),
    [actions.setTasks]: (state, {payload}) => Object.assign({}, state, {
        tasks: payload
    })
};

const initialState = {
    categories: {
        1: {
            id: 1,
            title: 'Category 1',
            tasks:[1,2,3],
            categories: []
        },
        2: {
            id: 2,
            title: 'Category 2',
            tasks:[4,5,6],
            categories: []
        },
        3: {
            id: 3,
            title: 'Category 3',
            tasks:[],
            categories: []
        }
    },
    initialCategoriesTree:{
        initialCategories:[1,2,3]
    },
    tasks: {
        1: {
            id: 1,
            title: 'Task1 1',
            completed: false,
        },
        2: {
            id: 2,
            title: 'Task2',
            completed: false,
        },
        3: {
            id: 3,
            title: 'Task3',
            completed: false,
        },
        4: {
            id: 4,
            title: 'Task4',
            completed: false,
        },
        5: {
            id: 5,
            title: 'Task5',
            completed: false,
        },
        6: {
            id: 6,
            title: 'Task6',
            completed: false,
        }
    }
};

export const commonReducer = {[NS]: handleActions(handlers, initialState)};