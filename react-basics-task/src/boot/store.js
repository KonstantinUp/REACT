import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

const _compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;


export const makeStore = ({ reducer, state,history}) => {

    return createStore(
        reducer,
        state,
        _compose(
            applyMiddleware(
                thunk,
                routerMiddleware(history),
            ),
        ),
    );
};