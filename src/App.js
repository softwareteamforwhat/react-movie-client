import React, {Component} from 'react';
import './App.less';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Login from './pages/login/login';
import Index from "./pages/index";
import Signup from "./pages/signup/signup";
import Favorite from './pages/favorite/favorite';
import Movies from './pages/movie/movies';
import MovieInfo from './pages/movie/movieinfo';
import Agreement from "./pages/signup/agreement";
import Expense from './pages/expense/expense';

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
                    <Route path='/favorite' component={Favorite} />
                    <Route path='/movies' component={Movies}/>
                    <Route path='/movieinfo' component={MovieInfo}/>
                    <Route path='/expense' component={Expense}/>
                    <Route exact path='/' component={Index}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
