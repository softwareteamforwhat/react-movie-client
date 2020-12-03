import React, {Component} from 'react';
import './App.less';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/login/login';
import Index from "./pages/index";
import Signup from "./pages/signup/signup";
import Forget from "./pages/forget/forget";
import Favorite from './pages/favorite/favorite';

/**
 * 应用的根组件
 */

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/forget' component={Forget}/>
                    <Route path='/favorite' component={Favorite}></Route>
                    <Route path='/' component={Index}/>
                </Switch>
            </BrowserRouter>
        )
    }
}