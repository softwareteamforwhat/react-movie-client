import React, {Component, createRef} from "react";
import logo from '../../assets/images/logo.png';
import './index.less';
import User from "../user";
import MySearch from "../search";
import {Fragment} from "react";

export default class Header extends Component<{ index: number }, { color: string[] }> {
    userRef=createRef<User>();

    changeUserAvatar(avatar:string){
        this.userRef.current?.setState({
            avatar:avatar,
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            color: ["white", "white", "white", "white"]
        }
        if (this.props.index < 4) this.state.color[this.props.index] = "red";
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
                                <li><a style={{color: color[3]}} href="/rank/follow">榜单</a></li>
                            </ul>
                        </div>
                        <div className="user">
                            <User ref={this.userRef}/>
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