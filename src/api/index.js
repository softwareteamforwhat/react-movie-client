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
export const apiChangeFollow = (uid, movieId,token) => ajax('/changeFollow', {}, 'POST', {params:{
        uid,
        movieId
    },headers: {"token": token}})

//找回密码
export const apiForget = (email) => ajax('/forget', {email})

//获取收藏榜单
export const apiGetFollowRank = (page) => ajax('/getFollowRank', {page})

//获取评分榜单
export const apiGetTopRank = (page) => ajax('/getTopRank', {page})

//获取搜索结果列表
export const apiSearch = (keyword) => ajax('/getSearch', {keyword})

//获取电影列表
export const apiGetMovies=(searchForm)=>ajax('/getMovieList',{...searchForm},'POST')

//获取用户订单列表
export const apiGetUserOrder=(uid,token)=>ajax('/getUserOrder',{uid},'GET',{headers:{"token":token}})

//退票
export const apiReturnUserTicket=(uid,orderId,token)=>ajax('/returnUserTicket',{uid,orderId},'POST',{headers:{"token":token}})

//获取用户收藏列表
export const apiGetUserFavorite=(uid,token)=>ajax('/getUserFavorite',{uid},'GET',{headers:{"token":token}})

//获取用户基本信息
export const apiGetUserInfo=(uid,token,error_handle,final)=>ajax('/getUserInfo',{uid},'GET',{headers:{"token":token}},error_handle,final)

//修改用户基本信息
export const apiModifyUserInfo=(uid,nickname,avatar,token,error_handle,final)=>ajax('/modifyUserInfo',{},'POST',{headers:{"token":token},params:{uid,nickname,avatar}},error_handle,final)

//修改用户密码
export const apiModifyPassword=(uid,pwd,token,error_handle,final)=>ajax('/modifyPassword',{},'POST',{headers:{"token":token},params:{uid,pwd}},error_handle,final)


//获取电影详情
export const apiGetMovieInfo = (id) => ajax('/movieInfo', {id}, 'GET')

//获取影院列表
export const apiGetCinemas=(searchForm)=>ajax('/getCinemas',{...searchForm},'POST')

//获取影院信息
export const apiGetCinemaInfo = (id) => ajax('/getCinemaInfo', {id}, 'GET')

//获取排片信息
export const apiGetSchedule = (cinemaId) => ajax('/getSchedule', {cinemaId}, 'GET')

//存储订单
export const apiSaveOrder=(token, orderInfo)=>ajax('/saveOrder',{...orderInfo},'POST',{headers: {"token": token}})

export const apiIfCollected=(uid,movieId,token)=>ajax('/isCollect',{uid,movieId},'GET',{headers: {"token": token}})
