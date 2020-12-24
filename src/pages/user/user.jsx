import React, { createRef } from 'react';
import Header from '../../components/header';
import { Form, Input, Button, message, Tabs, Select, Spin} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './user.less';
import {avatar_list} from '../../components/avatar/avatar'
import {apiGetUserInfo, apiModifyUserInfo, apiModifyPassword}from '../../api'
export default class UserPage extends React.Component {
    headRef=createRef();
    
       //const res=await apiGetUserInfo(localStorage.getItem('id'),localStorage.getItem('token'));

    changeAvatar(avatar){
        console.log('UserPage');
        this.headRef.current.changeUserAvatar(avatar);
    }
    
    render() {
        return (
            <div className='user-whole-page'>
                <Header index={-1} ref={this.headRef}/>
                <section className="modify-content">
                    <ModifyForm changeAvatar={this.changeAvatar.bind(this)}/>
                    
                </section>
            </div>
        );
    }

}




class ModifyForm extends React.Component{

    formRef=React.createRef();

    passFormRef=React.createRef();

    constructor(props){
        super(props);
        this.state={
            loading:true,
        }
    }

    componentDidMount(){
        
        
        apiGetUserInfo(localStorage.getItem('id'),localStorage.getItem('token'),(error)=>{
            console.log(error);
            message.error('网络出现问题，请检查您的网络连接');
        },()=>{
            this.setState({
                loading:false,
            })
        }).then((res)=>{
            if(res.status===0){
                console.log(res.data);
                this.setState({
                    email:res.data.email,
                    nickname:res.data.nickname,
                })
                this.formRef.current.setFieldsValue({
                    email:res.data.email,
                    nickname:res.data.nickname,
                    avatar:res.data.avatar,
                })
            }else if(res.status===1){
                message.config({
                    top:100,
                })
                message.error(res.msg);
            }else{
                alert('status不为01');
            }
            
        });
        
    }
    onModifyPassword=(password)=>{
        this.setState({
            loading:true,
        })
        message.config({
            top:100, 
        });
        message.success('开始发起修改密码请求');
        
        console.log(password.password);
        apiModifyPassword(localStorage.getItem('id'),password.password,localStorage.getItem('token'),(error)=>{

        },()=>{
            this.setState({
                loading:false,
            })
        }).then((res)=>{
            console.log(res);
            
            if(res.status===0){
                message.success('修改密码成功');
                localStorage.setItem('token',res.msg);
                if(localStorage.getItem('remember')===1){
                    this.setItem('password',password);
                }
                this.passFormRef.current.resetFields();
                
            }else if(res.status===1){
                message.error(res.msg);
            }else{
                alert('status不为01')
            }
        });
        
    }

    onModifyUserInfo=(userInfo)=>{
        this.setState({
            loading:true,
        })
        
        message.config({
            top:100, 
        });
        //message.success('开始发起修改基本信息请求');
        console.log({
            uid:localStorage.getItem('id'),
            nickname:userInfo.nickname,
            avatar:userInfo.avatar,
            token:localStorage.getItem('token'),
        })
        apiModifyUserInfo(localStorage.getItem('id'),userInfo.nickname,userInfo.avatar,localStorage.getItem('token'),(error)=>{
            
        },()=>{
            this.setState({
                loading:false,
            })
        }).then((res)=>{
            console.log(res)
            if(res.status===0){
                message.success(res.msg);
                this.props.changeAvatar(userInfo.avatar);
                localStorage.setItem('avatar',userInfo.avatar);
            }else if(res.status===1){
                message.error(res.msg);
            }else{
                alert('status不为01');
            }
        });
        
        

    }

    onReset = () => {
        console.log('onReset');
        this.formRef.current.setFieldsValue({
            email: this.state.email,
            nickname: this.state.nickname,
        })
        message.config({
            top: 100,
        })
        message.success({
            content: '已重置基本信息',
        });
    }
    render(){
        return (
            <div className="modify-form">
                <Spin spinning={this.state.loading}>
                <Tabs defaultActiveKey="0">
                    <Tabs.TabPane tab="基本信息" key="0">
                        <Form
                            name="basicInfo_form"
                            ref={this.formRef}
                            
                            onFinish={this.onModifyUserInfo}
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
                    <Button htmlType="button" onClick={this.onReset}>重置</Button>
                            </Form.Item>
                        </Form>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="修改密码" key="1">
                        <Form name="password_form" ref={this.passFormRef}onFinish={this.onModifyPassword}>
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
                </Spin>
            </div>
        );
    }
    
    
}