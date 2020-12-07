/*
要求: 能根据接口文档定义接口请求
包含应用中所有接口请求函数的模块
每个函数的返回值都是promise

基本要求: 能根据接口文档定义接口请求函数
 */
import ajax from './ajax'

// 登陆
export const apiLogin = (username, password) => ajax('/login', {username, password}, 'POST')

// 注册
export const apiRegister = (email, username, password, nickname) => ajax('/register', {
    email,
    username,
    password,
    nickname
}, 'POST')

//获取验证码
export const apiGetCode = (email) => ajax('/code',{email},'GET')

