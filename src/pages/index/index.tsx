import React, {Component} from 'react'
import Header from "../../components/header";
import MyCarousel from "../../components/carousel";
import {movieP} from '../../config/datastructures';
import movieP1 from "../../assets/images/movieP1.jpg";
import movieP2 from "../../assets/images/movieP2.jpg";
import './index.less';
import IndexMovie from "./movie";
import IndexRank from "./rank";

const movie1: movieP = {
    movieId: "1282401",
    moviePhoto: movieP1
}
// const movie2: movieP = {
//     movieId: "1",
//     moviePhoto: movieP2
// }
const moviePList: movieP[] = [movie1, movie1]
/*
主页的路由组件
 */
export default class Index extends Component {

    // click = () => {
    //     localStorage.removeItem("nickName");
    //     localStorage.removeItem("token");
    //     console.log("退出登录");
    // }

    render() {
        document.title = '主页';
        return (<div>
            <Header index={0}/>
            <MyCarousel moviePList={moviePList}/>
            <div className="index-content">
                <div className="my-content">
                    <div className="movie-grid">
                        <IndexMovie/>
                    </div>
                    <div className="rank-grid">
                        <IndexRank/>
                    </div>
                </div>
            </div>
        </div>);
    }
}