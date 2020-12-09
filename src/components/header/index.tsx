import React, {Component} from "react";
import logo from '../../assets/images/logo.png';
import './index.less';
import User from "../user";
import MySearch from "../search";
import {Fragment} from "react";

export default class Header extends Component<{ index: number }, { color: string[] }> {
    constructor(props) {
        super(props);
        this.state = {
            color: ["white", "white", "white", "white"]
        }
        this.state.color[this.props.index] = "red";
    }

    render() {
        const color = this.state.color;
        return (
            <Fragment>
                <div style={{height: "80px"}}/>
                <div className="header">
                    <div className="header-inner">
                        <img src={logo} className="logo" alt="logo"/>
                        <div className="nav">
                            <ul className="navbar">

                                <li><a style={{color: color[0]}} href="/">首页</a></li>
                                <li><a style={{color: color[1]}} href="/movies">电影</a></li>
                                <li><a style={{color: color[2]}} href="/cinemas">影院</a></li>
                                <li><a style={{color: color[3]}} href="/board">榜单</a></li>
                            </ul>
                        </div>
                        <div className="user">
                            <User/>
                        </div>
                        <div className="search">
                            <MySearch/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}