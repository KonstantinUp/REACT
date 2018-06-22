import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'

import {makeReducer} from "./boot/reducer";
import {makeStore} from "./boot/store";




const reducer = makeReducer();
const state = {};
const store = makeStore({ reducer, state });

ReactDOM.render((
    <Provider store={store}>
          <App />
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
