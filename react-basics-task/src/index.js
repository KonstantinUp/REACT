
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ConnectedRouter } from 'react-router-redux';
import {makeReducer} from "./boot/reducer";
import {Provider} from "react-redux";
import {makeStore} from "./boot/store";

// import createHistory from 'history/createMemoryHistory';

import createHistory from 'history/createBrowserHistory'

// ReactDOM.render(
//     <MuiThemeProvider>
//             < BrowserRouter>
//                 <Route path ="/" component = {App}/>
//             </BrowserRouter>
//     </MuiThemeProvider>,
//     document.getElementById('root'));
// registerServiceWorker();

const reducer = makeReducer();
const state = {};
const history = createHistory();
const store = makeStore({ reducer, state, history });


ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root'),
);