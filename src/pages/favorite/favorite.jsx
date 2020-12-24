import React from 'react';
import Header from '../../components/header';
import { Link } from 'react-router-dom';
import { Col, Pagination, Row, Button, message, Empty, Spin } from 'antd';
import './favorite.less'
import { apiChangeFollow, apiGetUserFavorite } from '../../api';

export default class Favorite extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            movieList: [],
            loading:true, 
        };
        
    }

    onChange = (page, pageSize = 10) => {
        
        
    }
    componentDidMount() {
        apiGetUserFavorite(localStorage.getItem('id'),localStorage.getItem('token'),(error)=>{
            
        },()=>{
            this.setState({
                loading:false
            })
        }).then((res)=>{
           console.log(res);
           if(res.status===0){
               this.setState({movieList:res.data})

           } else if(res.status===1){
               message.config({
                   top:100,
               })
               message.error(res.msg);
           }else{
               alert('status不为01');
           }
        });
        //TODO:添加获取用户收藏信息api
    }

    /**
     * 获取假的电影列表
     */
    getFakeMovieList(amount) {
        const obj={
            movieId: "1240838",
            picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
            c_name: "除暴",
            e_name: "Caught in Time",
            type: ["犯罪", "剧情", "动作"],
            area: "中国香港,中国大陆",
            length: "95分钟",
            time: "2020-11-20中国大陆上映",
            actors: [
                '王千源',
                '春夏'
            ],
        }
        const movielist =Array.from({length:amount},()=>obj);
        //console.log(movielist);
        return movielist;

    }

    movieListRender = () => {
        const list = this.state.movieList;
        const cancelFavorite = (e,index) => {
            message.config({
                top:100,
            })
            console.log(this.state.movieList[index].movieId);
            //message.success('取消收藏电影成功');
            //取消页面跳转
            e.preventDefault();
            
            this.setState({
                loading:true,
            })
            
            apiChangeFollow(localStorage.getItem('id'),this.state.movieList[index].movieId,localStorage.getItem('token'),(error)=>{

            },()=>{
                this.setState({
                    loading:false,
                })
            }).then((res)=>{
                if(res.status===0){
                    console.log(res);
                    message.success('取消收藏成功');
                    console.log(this.state.movieList);
                    const delete_index=this.state.movieList[index].movieId
                    this.setState((preState,props)=>({
                        movieList:preState.movieList.filter(m=>(m.movieId!==delete_index))
                    }))
                } else if(res.status===1){
                    message.error(res.msg);
                }else{
                    alert('status不为01');
                }
            });
            
        }

        if(list.length===0){
            return <Empty description={
                <span>没有收藏任何电影，<a href='/'>去看看</a></span>
            }>
            </Empty>
        }
        else{
            return (
                <Row>
                    {list.map((movie, index) => {
                        const size = index + 1 <= 2 ? "800%" : "400%";
                        const color = index + 1 <= 2 ? "#FFB400" : "black";
                        const background=(index%2===0)?'background-white':'background-blue';
                        return (<Col span={24} key={index} className={'favorite-item '+background}>
                            <Link to={{
                                pathname: "/movieinfo",
                                state: {
                                    id: movie.movieId
                                }
                            }}>
    
                                <Row gutter={[8, 8]}>
                                    <Col span={4}/>
                                    <Col span={6} style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        height: "250px"
                                    }}>
                                        <img style={{ width: "160px", height: "220px" }} alt={movie.name + "海报"}
                                            src={movie.picture} />
                                    </Col>
                                    <Col span={8} style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        textAlign: "center"
                                    }}>
                                        <h2 style={{ color: "black", textAlign: "left" }}>{movie.c_name}</h2>
                                        <h3 style={{color:"gray", textAlign:"left"}}>
                                            {movie.e_name}
                                        </h3>
                                        <span style={{ color: "black", textAlign: "left" }}>
                                            <span className='item-title'>{"类型："}</span>
                                            <span className='item-value'>
                                                {movie.type.join('、')}
                                            </span>
                                        </span>
                                        <span style={{ color: "black", textAlign: "left" }}>
                                            <span className='item-title'>{"时长："}</span>
                                            <span className='item-value'>{movie.length}分钟</span>
                                        </span>
                                        <span style={{ color: "black", textAlign: "left" }}>
                                            <span className='item-title'>{"主演："}</span>
                                            <span className='item-value'>{movie.actors.join('、')}</span>
                                        </span>
                                        <span style={{ color: "black", textAlign: "left" }}>
                                            <span className="item-title">{"地区："}</span>
                                            <span className="item-value">{movie.area}</span>
                                        </span>
                                        <span style={{ color: "gray", textAlign: "left" }}>
                                            <span className="item-title">{"上映时间："}</span>
                                            <span className="item-value">{movie.date}</span>
                                        </span>
    
                                    </Col>
                                    <Col span={4} style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}>
                                        {/*FIXME: Button按钮会被电影跳转链接覆盖到*/}
                                        <Button htmlType="buttton" onClick={(e) =>cancelFavorite(e,index)}>
                                            取消收藏
                                        </Button>
                                    </Col>
                                    <Col span={2} />
                                </Row>
                            </Link>
                        </Col>)
                    }
                    )}
                </Row>
            );
        }
        
    }

    render() {
        return (
            <div className='favorite-whole-page'>
                <Header index={-1} />
                <h1>收藏电影</h1>
                <div className="rank-top-content" style={{ textAlign: "center" }}>
                    <Spin spinning={this.state.loading}>
                        <this.movieListRender />
                        <Pagination showSizeChanger={false} defaultCurrent={1} total={this.state.movieList.length} onChange={this.onChange} />
                    </Spin>
                </div>
            </div>
        );
    }
}

