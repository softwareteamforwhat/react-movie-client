import React from 'react';
import Header from '../../components/header';
import { Form, Input, Button, message, Tabs, Select, } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './user.less';
import {avatar_list} from '../../components/avatar/avatar'
import {apiGetUserInfo, apiModifyUserInfo, apiModifyPassword}from '../../api'
export default class UserPage extends React.Component {

    render() {
        return (
            <div className='user-whole-page'>
                <Header index={-1} />
                <section className="modify-content">
                    <ModifyForm />
                </section>
            </div>
        );
    }

}

/**
 * 获取假的用户数据
 */
const getFakeUserInfo = () => {
    const fakeUserInfo = {
        'email': 'test@nju.edu.cn',
        'nickname': 'test',
    };
    return fakeUserInfo;
}


const ModifyForm = () => {
    const [form] = Form.useForm();

    
    const onModifyUserInfo=(userInfo)=>{
        message.config({
            top:100, 
        });
        message.success('开始发起修改基本信息请求');
        apiModifyUserInfo(userInfo).then((res)=>{
            console.log(res)
            //TODO:检查后端传过来的是否成功信息
        }).catch((err)=>{
            console.log(err);
            message.error(err);
        });
        

    }
    
    const onModifyPassword=(password)=>{
        message.config({
            top:100, 
        });
        message.success('开始发起修改密码请求');
        //删除确认密码字段
        delete password.confirm;
        apiModifyPassword(password).then((res)=>{
            console.log(res);
            //TODO:检查后端传过来的是否成功信息
        }).catch((err)=>{
            console.log(err);
            message.error(err);
        });
        
    }
    const onReset = () => {
        console.log('onReset');
        form.setFieldsValue({
            email: getFakeUserInfo().email,
            nickname: getFakeUserInfo().nickname,
        })
        message.config({
            top: 100,
        })
        message.success({
            content: '已重置基本信息',
        });
    }
    const switchTabs = (key) => {
        console.log(key);
    }
    return (
        <div className="modify-form">
            <Tabs defaultActiveKey="0" onChange={switchTabs}>
                <Tabs.TabPane tab="基本信息" key="0">
                    <Form
                        name="basicInfo_form"
                        form={form}
                        initialValues={{
                            email: getFakeUserInfo().email,
                            nickname: getFakeUserInfo().nickname,
                        }}
                        onFinish={onModifyUserInfo}
                    >
                        <Form.Item
                            name="email"
                            label="邮箱"
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} disabled bordered={false} style={{ color: 'black' }} />
                        </Form.Item>
                        <Form.Item
                            name="nickname"
                            label="昵称"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入昵称!',
                                },
                            ]}

                        >

                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="昵称"
                            />

                        </Form.Item>
                        
                        <Form.Item name="avatar" label='头像'
                            rules={[{
                                required:true,
                                message:'请输入头像',
                            }]}>
                            <Select optionLabelProp='title'>
                                {avatar_list.map((avatar,index)=>{
                                    
                                    return <Select.Option value={avatar.image} key={index} title={avatar.name}>
                                        <img src={avatar.image} alt={avatar.name}/>
                                    </Select.Option>
                                })}
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                修改
                </Button>
                    或者
                <Button htmlType="button" onClick={onReset}>重置</Button>
                        </Form.Item>
                    </Form>
                </Tabs.TabPane>
                <Tabs.TabPane tab="修改密码" key="1">
                    <Form name="password_form" onFinish={onModifyPassword}>
                    <Form.Item
                name="password"
                label="密码"
                rules={[
                    {
                        required: true,
                        message: '请输入密码!',
                    },
                    {
                        min: 8,
                        max: 20,
                        message: '密码必须由8-20位数字和字母组成!',
                    },
                    {
                        pattern: /[A-Za-z0-9]/,
                        message: '密码必须由数字和字母构成',
                    },
                ]}
                hasFeedback
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    placeholder='密码'
                />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="确认"
                dependencies={['password']}
                hasFeedback
                
                rules={[
                    {
                        required: true,
                        message: '请确认密码!',
                    },
                    ({getFieldValue}) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('两次输入密码不一致!');
                        },
                    }),
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    placeholder='确认密码'
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">修改</Button>
            </Form.Item>
                    </Form>
                </Tabs.TabPane>
            </Tabs>

        </div>
    );
}
