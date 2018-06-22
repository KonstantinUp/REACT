import { createStore, combineReducers, applyMiddleware, compose } from 'redux';




const _compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;


export const makeStore = ({ reducer, state}) => {

    return createStore(
        reducer,
        state,
        _compose(
            applyMiddleware(

            ),
        ),
    );
};