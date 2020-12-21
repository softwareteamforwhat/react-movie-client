import React, {Component} from 'react';
import './login.less';
import logo from '../../assets/images/logo.png';
import {Form, Input, Button, Checkbox, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {loginInfoResponse} from "../../api/response/loginResponse";
import {apiForget, apiLogin} from "../../api";
// import {apiLogin} from '../../api';

/*
登陆的路由组件
 */

const NormalLoginForm = () => {
    const [form] = Form.useForm();
    const onFinish = async (values: any) => {
        // console.log(values.email,values.password);
        const result: loginInfoResponse = await apiLogin(values.email,values.password);
        if (values.remember) {
            localStorage.setItem('email', values.email);
            localStorage.setItem('password', values.password);
            localStorage.setItem('remember', String(Number(values.remember)));
        }
        if (result.status === 0) {
            message.success('登录成功！');
            // console.log(result);
            const avatar = result.data.avatar;
            const token = result.data.token;
            const _id = result.data.id;
            localStorage.setItem("avatar", avatar);
            localStorage.setItem("id",_id);
            localStorage.setItem("token", token);
            window.location.href = '/';
        }else if(result.status===1){
            console.log(result)
            message.error('用户名或密码错误！');
        }
    };

    let remember: Number = Number(localStorage.getItem('remember') || 0);
    const email: string = localStorage.getItem('email') || "";
    const password: string = localStorage.getItem('password') || "";
    const onChange = () => {
        if (remember) {
            remember = 0;
            localStorage.removeItem('email');
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
            form={form}
            initialValues={{
                remember: remember,
                email: email,
                password: password
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: '请输入注册用邮箱!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="邮箱"/>
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

                <a className="login-form-forgot" onClick={()=>{
                    message.success("已经将新密码发至您的邮箱，请及时更改密码");
                    apiForget(form.getFieldValue('email'));
                }}>
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
    constructor(props: any) {
        super(props);
        this.state = {
            username: "",
            password: "",
            remember: 0
        };
    }

    render() {

        // const nickName = localStorage.getItem("nickName");
        // const token = localStorage.getItem("token");
        // if(token && nickName) {
        //     return <Redirect to='/'/>
        // }
        document.title = '登录';
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
