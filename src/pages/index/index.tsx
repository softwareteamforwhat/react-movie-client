import React, {Component} from 'react'
import Header from "../../components/header";
import MyCarousel from "../../components/carousel";
import {movieP} from '../../config/datastructures';
import movieP1 from "../../assets/images/movieP1.jpg";
import movieP2 from "../../assets/images/movieP2.jpg";

const movie1:movieP={
    movieId: "0",
    moviePhoto:movieP1
}
const movie2:movieP={
    movieId: "1",
    moviePhoto:movieP2
}
const moviePList:movieP[]=[movie1,movie2]
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
            <MyCarousel moviePList={moviePList} />

        </div>);
    }
}