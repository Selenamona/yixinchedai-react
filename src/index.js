import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from "react-router";
import './index.css'; 
// import App from './App';
import Home from "./routes/home";
import Brands from "./routes/brands";
import Help from "./routes/help";
import registerServiceWorker from './registerServiceWorker';

const APP = ()=>{
    return(
        <Router history={hashHistory}>
            <Route path = "/home" component = {Home}></Route>
            <Route path = "/brands" component = {Brands}></Route>
            <Route path = "/help" component = {Help}></Route> 
        </Router>
    )
}

ReactDOM.render(<APP />, document.getElementById('root'));
registerServiceWorker();
