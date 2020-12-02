import React, {Component} from 'react'
import './signup.less'
import {
    Form,
    Input,
    Tooltip,
    Row,
    Col,
    Checkbox,
    Button,
} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import logo from "./images/logo.png";


const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 8},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegistrationForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                prefix: '86',
            }}
            scrollToFirstError
        >
            <Form.Item
                name="email"
                label="邮箱"
                rules={[
                    {
                        type: 'email',
                        message: '输入不是邮箱!',
                    },
                    {
                        required: true,
                        message: '请输入邮箱!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

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
                <Input.Password/>
            </Form.Item>

            <Form.Item
                name="confirm"
                label="确认密码"
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
                <Input.Password/>
            </Form.Item>

            <Form.Item
                name="nickname"
                label={
                    <span>
            昵称&nbsp;
                        <Tooltip title="您想让别人怎么称呼您?">
              <QuestionCircleOutlined/>
            </Tooltip>
          </span>
                }
                rules={[{required: true, message: '请输入昵称!', whitespace: true}]}
            >
                <Input/>
            </Form.Item>


            <Form.Item label="验证码" extra="获取邮箱验证码">
                <Row gutter={8}>
                    <Col span={12}>
                        <Form.Item
                            name="captcha"
                            rules={[{required: true, message: '请输入验证码!'}]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Button>获取验证码</Button>
                    </Col>
                </Row>
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject('请阅读并同意用户协议'),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    我已经阅读了 <a href="/agreement" target="_blank">agreement</a>
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" className="register-button">
                    注册
                </Button>
            </Form.Item>
        </Form>
    );
};
/*
注册的路由组件
 */

export default class Signup extends Component {


    render() {
        return (
            <div className="signup">
                <header className="signup-header">
                    <img src={logo} alt="logo"/>
                    <h1>幽浮电影</h1>
                </header>
                <section className="signup-content">
                    <h2>用户注册</h2>
                    <RegistrationForm/>
                </section>
            </div>
        );
    }
}