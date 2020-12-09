import React, {Component} from "react";
import userDefault from '../../assets/images/userDefault.png';
import './index.less';
import {Menu, Dropdown, Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';

const Logout=()=>{
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("avatar");
}

const login_menu = (
    <Menu>
        <Menu.Item>
            <a href="/user/orders">
                我的订单
            </a>
        </Menu.Item>
        <Menu.Item>
            <a href="/user/info">
                基本信息
            </a>
        </Menu.Item>
        <Menu.Item>
            <a href="/" onClick={Logout}>
                退出登录
            </a>
        </Menu.Item>
    </Menu>
);
const logout_menu = (
    <Menu>
        <Menu.Item>
            <a href="/login">
                登录
            </a>
        </Menu.Item>
    </Menu>
);
export default class User extends Component {
    render() {
        const avatar: string = localStorage.getItem("avatar")||userDefault;
        const token = localStorage.getItem("token");
        const user_avator = <img src={avatar} alt="头像" />;
        if(token){
            return (
                <div>
                    <Dropdown overlay={login_menu} placement="bottomCenter" arrow >
                        <Button className="user-btn" shape="circle" icon={user_avator} />
                    </Dropdown>
                </div>
            );
        }else {
            return (
                <div>
                    <Dropdown overlay={logout_menu} placement="bottomCenter" arrow >
                        <Button className="user-btn" shape="circle" icon={<UserOutlined/>} />
                    </Dropdown>
                </div>
            );
        }
    }
}