import React, {Component} from "react";
import userDefault from '../../assets/images/userDefault.png';
import './index.less';
import {Menu, Dropdown, Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';

const Logout = () => {
  localStorage.removeItem("id");
  localStorage.removeItem("token");
  localStorage.removeItem("avatar");
}

const login_menu = (
  <Menu className="menu">
    <Menu.Item>
      <a href="/user/orders">
        我的订单
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="/user/info">
        个人信息
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href='/user/favorite'>
        我的收藏
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
  <Menu className="menu">
    <Menu.Item>
      <a href="/login">
        登录
      </a>
    </Menu.Item>
  </Menu>
);

type userState = {
  avatar: string,
  token: string | null,
}
export default class User extends Component <any, userState> {
  constructor(props) {
    super(props);
    this.state = {
      avatar: localStorage.getItem('avatar') || userDefault,
      token: localStorage.getItem('token'),
    }
  }

  render() {
    const user_avator = <img src={this.state.avatar} style={{lineHeight: "100%", objectFit: "cover"}}
                             alt="头像"/>;
    if (this.state.token) {
      return (
        <div onClick={() => {
          window.location.href = "/user/info"
        }}>
          <Dropdown overlay={login_menu} placement="bottomCenter" arrow>
            <div className="user-zone"><Button className="user-btn" shape="circle" icon={user_avator}/></div>
          </Dropdown>
        </div>
      );
    } else {
      return (
        <div onClick={() => {
          window.location.href = "/login"
        }}>
          <Dropdown overlay={logout_menu} placement="bottomCenter" arrow>
            <div className="user-zone"><Button className="user-btn" shape="circle" icon={<UserOutlined/>}/></div>
          </Dropdown>
        </div>
      );
    }
  }
}