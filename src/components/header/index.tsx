import React, {Component} from "react";
import logo from '../../assets/images/logo.png';
import './index.less';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-inner">
                    <img src={logo} className="logo" alt="logo" />
                    <div className="nav">
                        <ul className="navbar">
                            <li><a href="/" data-act="home-click">首页</a></li>
                            <li><a href="/movies" data-act="movies-click" className="active">电影</a></li>
                            <li><a href="/cinemas" data-act="cinemas-click">影院</a></li>
                            <li><a href="/board" data-act="board-click">榜单</a></li>
                        </ul>
                    </div>



                </div>
            </div>
        );
    }
}
