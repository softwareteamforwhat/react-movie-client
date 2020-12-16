import React from 'react';
import Header from '../../components/header';
import {Form, Input, Button,message,Popover} from 'antd';
import {UserOutlined,LockOutlined} from '@ant-design/icons';
import './user.less';
import { title } from 'process';
export default class UserPage extends React.Component{

    render(){
        return (
            <div className='whole-page'>
                <Header index={1}/>
                <section className="modify-content">
                    <h1>基本信息</h1>
                    <ModifyForm/>
                </section>
            </div>
        );
    }
    
}

/**
 * 获取假的用户数据
 */
const getFakeUserInfo=()=>{
    const fakeUserInfo={
        'email':'test@nju.edu.cn',
        'nickname':'test',
    };
    return fakeUserInfo;
}


const ModifyForm =()=>{
    const [form]=Form.useForm();
    
    const onFinish=()=>{
        message.success('已发送修改请求')
        //TODO: 向后端发送修改请求
    }
    const onReset=()=>{
        console.log('onReset');
        form.setFieldsValue({
            email:getFakeUserInfo().email,
            nickname:getFakeUserInfo().nickname,
        })
        message.config({
            top:100,
        })
        message.success({
            content:'已重置基本信息',
        });
    }
    return (
        <Form
            name="normal_modify"
            className="modify-form"
            form={form}
            initialValues={{
                email: getFakeUserInfo().email,
                nickname:getFakeUserInfo().nickname,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: '请输入邮箱!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="邮箱"/>
            </Form.Item>
            <Form.Item
                name="nickname"
                rules={[
                    {
                        required: true,
                        message: '请输入昵称!',
                    },
                ]}
                
            >
                
                <Input
                    prefix={<UserOutlined className="site-form-item-icon"/>}
                    placeholder="昵称"
                />
                
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
            <Form.Item
                name="confirm_password"
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
                    placeholder="确认密码"
                />
            </Form.Item>        

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    修改
                </Button>
                或者 <Button htmlType="button" onClick={onReset}>重置</Button>
            </Form.Item>
        </Form>
    );
}
