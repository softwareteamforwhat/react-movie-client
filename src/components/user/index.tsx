import React, {Component} from "react";
import userLogout from "../../assets/images/userLogout.png";
import userDefault from "../../assets/images/userDefault.png";

export default class User extends Component {
    render() {
        const avatar: string = localStorage.getItem("avatar") || userDefault;
        const token = localStorage.getItem("token");
        if (token) {
            return (
                <div className="user-avatar has-login">
                    <img src={avatar} alt="头像"/>
                    <span className="caret" />
                    <ul className="user-menu yes-login-menu">
                        <li className="text"><a href="/user/orders">我的订单</a></li>
                        <li className="text login-name">
                            <a href="/user/message">基本信息</a>
                        </li>
                        <li className="text"><a href="/user/logout" className="J-logout">退出登录</a></li>
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="user-avatar J-login">
                    <img src={userLogout} alt="NoOne"/>
                    <span className="caret" />
                    <ul className="user-menu no-login-menu">
                        <li><a href="/login">登录</a></li>
                    </ul>
                </div>
            );
        }
    }
}