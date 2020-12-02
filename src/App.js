import React, {Component} from 'react';
import './App.less';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/login/login';
import Index from "./pages/index";
import Signup from "./pages/signup/signup";
import Forget from "./pages/forget/forget";
import Agreement from "./pages/signup/agreement";

/**
 * 应用的根组件
 */

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login'  component={Login}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/agreement' component={Agreement}/>
                    <Route path='/' component={Index}/>
                    <Route path='/forget' component={Forget}/>
                </Switch>
            </BrowserRouter>
        )
    }
}