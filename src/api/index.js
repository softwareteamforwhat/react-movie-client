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
export const apiRegister = (email, code, password, nickname) => ajax('/register', {
    email,
    code,
    password,
    nickname
}, 'POST')

//获取验证码
export const apiGetCode = (email) => ajax('/code', {email}, 'GET')

//改变收藏状态
export const apiChangeFollow = (id, token, followId) => ajax('/changeFollow', {
    id,
    followId
}, 'POST', {headers: {"Authorization": token}})

//找回密码
export const apiForget = (email) => ajax('/forget', {email})

//获取收藏榜单
export const apiGetFollowRank = (page) => ajax('/getFollowRank', {page})

//获取评分榜单
export const apiGetTopRank = (page) => ajax('/getTopRank', {page})

//获取搜索结果列表
export const apiSearch = (text) => ajax('/getSearch', {text})

//获取电影列表
export const apiGetMovies=(searchForm)=>ajax('/getMovieList',{...searchForm},'POST')
