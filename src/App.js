import React, {Component} from 'react';
import './App.less';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/login/login';
import Index from "./pages/index/index";
import Signup from "./pages/signup/signup";

/**
 * 应用的根组件
 */

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/singup' component={Signup}/>
                    <Route path='/' component={Index}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;