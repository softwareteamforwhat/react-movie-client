import React, {Component} from 'react';
import './login.less';
import logo from "./images/logo.png";
import {Form, Input, Button, Checkbox, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';


/*
登陆的路由组件
 */

const NormalLoginForm = () => {
    const onFinish = (values: any) => {
        console.log(values);
        if (values.remember) {
            localStorage.setItem('username', values.username);
            localStorage.setItem('password', values.password);
            localStorage.setItem('remember', String(Number(values.remember)));
        }
    };

    let remember: Number = Number(localStorage.getItem('remember') || 0);
    const username: string = localStorage.getItem('username') || "";
    const password: string = localStorage.getItem('password') || "";
    const onChange = () => {
        if (remember) {
            remember = 0;
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            localStorage.setItem('remember', "0");
        } else {
            remember = 1;
            message.warning('请在信任的电脑上保存密码');
        }
    }
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: remember,
                username: username,
                password: password
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: '请输入用户名!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: '请输入密码!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="密码"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox onChange={() => {
                        onChange()
                    }}>记住密码</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="/forget">
                    找回密码
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                </Button>
                或者 <a href="/signup">立即注册!</a>
            </Form.Item>
        </Form>
    );
};


export default class Login extends Component {
    // constructor(props: any) {
    //     super(props);
    //     this.state = {
    //         username: "",
    //         password: "",
    //         remember: 0
    //     };
    // }
    // componentDidMount() {
    //     const remember: Number = Number(localStorage.getItem('remember') || false);
    //     const username: string = localStorage.getItem('username') || "";
    //     const password: string = localStorage.getItem('password') || "";
    //     this.setState({remember: remember, username: username, password: password});
    // }

    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>幽浮电影</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <NormalLoginForm/>
                </section>
            </div>
        )
    }
}