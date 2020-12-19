import React from 'react';
import Header from '../../components/header';
import { Link } from 'react-router-dom';
import { Col, Pagination, Row, Button, message } from 'antd';
import './favorite.less'
import { apiGetUserFavorite } from '../../api';

export default class Favorite extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movieList: [] };
        apiGetUserFavorite(localStorage.getItem('id'),localStorage.getItem('token')).then((res)=>{
            console.log(res);
            //TODO:获取用户收藏列表
        }).catch((err)=>{
            console.log(err);
            message.config({
                top:100,
            })
            message.error(err);
        });
        
        
    }

    onChange = (page, pageSize = 10) => {
        /*
        apiGetTopRank(page).then((res) => {
            console.log(res);
            this.setState({movieList: res.data});
        })
        */
        
    }
    componentDidMount() {

        //TODO:添加获取用户收藏信息api
        this.setState({
            movieList:this.getFakeMovieList(30),
        })
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
        const cancelFavorite = () => {
            message.success('取消收藏电影成功');
            //TODO:添加取消收藏api
        }

        
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
                                <Col span={2} />
                                <Col span={2} style={{
                                    display: "flex",
                                    alignItems: "center"
                                }}> <span style={{

                                    fontWeight: "bold",
                                    color: color,
                                    fontStyle: "italic",
                                    fontSize: size,

                                }}></span></Col>
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
                                    <span style={{ color: "black", textAlign: "left" }}>
                                        <span className='item-title'>{"类型："}</span>
                                        <span className='item-value'>
                                            {movie.type.join('、')}
                                        </span>
                                    </span>
                                    <span style={{ color: "black", textAlign: "left" }}>
                                        <span className='item-title'>{"时长："}</span>
                                        <span className='item-value'>{movie.length}</span>
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
                                        <span className="item-value">{movie.time}</span>
                                    </span>

                                </Col>
                                <Col span={4} style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    textAlign: "center"
                                }}>
                                    {/*FIXME: Button按钮会被电影跳转链接覆盖到*/}
                                    <Button htmlType="buttton" onClick={cancelFavorite}>
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

    render() {
        return (
            <div className='favorite-whole-page'>
                <Header index={-1} />
                <h1>收藏电影</h1>
                <div className="rank-top-content" style={{ textAlign: "center" }}>
                    <this.movieListRender />
                    <Pagination showSizeChanger={false} defaultCurrent={1} total={this.state.movieList.length} onChange={this.onChange} />
                </div>
            </div>
        );
    }
}

