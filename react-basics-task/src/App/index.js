import React from "react";
import {Route} from "react-router-dom";

import {default as AppComponent} from './App';


export const App = () => {
    return (
        <Route path="/" component={AppComponent}/>
    )
};

