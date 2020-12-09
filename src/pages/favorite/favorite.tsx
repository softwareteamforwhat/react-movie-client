import React from 'react';
import Header from '../../components/header';
import MovieCell from '../../components/movie/moviecell';

require('./favorite.css');

/**
 * 注册的收藏夹页面组件
 */
export default class Favorite extends React.Component{

    
    render(){
        
        return (
            <div>
                <Header index={1}/>
                <FavoritePanel />
            </div>
        );
    }
}
/**
 * 收藏夹组件
 */
class FavoritePanel extends React.Component{
    
    /**
     * 获取假的电影列表
     */
    getFakeMovieList(){
        const movielist = [
            {
                movieId: "1240838",
                picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
                name: "除暴",
                name2: "Caught in Time",
                type: [" 犯罪 ", " 剧情 ", " 动作 "],
                place: "中国香港,中国大陆",
                length: "95分钟",
                time: "2020-11-20中国大陆上映",
            },
            {
                movieId: "1240838",
                picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
                name: "除暴",
                name2: "Caught in Time",
                type: [" 犯罪 ", " 剧情 ", " 动作 "],
                place: "中国香港,中国大陆",
                length: "95分钟",
                time: "2020-11-20中国大陆上映",
            },
            {
                movieId: "1240838",
                picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
                name: "除暴",
                name2: "Caught in Time",
                type: [" 犯罪 ", " 剧情 ", " 动作 "],
                place: "中国香港,中国大陆",
                length: "95分钟",
                time: "2020-11-20中国大陆上映",
            },
            {
                movieId: "1240838",
                picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
                name: "除暴",
                name2: "Caught in Time",
                type: [" 犯罪 ", " 剧情 ", " 动作 "],
                place: "中国香港,中国大陆",
                length: "95分钟",
                time: "2020-11-20中国大陆上映",
            },
            {
                movieId: "1240838",
                picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
                name: "除暴",
                name2: "Caught in Time",
                type: [" 犯罪 ", " 剧情 ", " 动作 "],
                place: "中国香港,中国大陆",
                length: "95分钟",
                time: "2020-11-20中国大陆上映",
            },
            {
                movieId: "1240838",
                picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
                name: "除暴",
                name2: "Caught in Time",
                type: [" 犯罪 ", " 剧情 ", " 动作 "],
                place: "中国香港,中国大陆",
                length: "95分钟",
                time: "2020-11-20中国大陆上映",
            },
            {
                movieId: "1240838",
                picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
                name: "除暴",
                name2: "Caught in Time",
                type: [" 犯罪 ", " 剧情 ", " 动作 "],
                place: "中国香港,中国大陆",
                length: "95分钟",
                time: "2020-11-20中国大陆上映",
            },
            {
                movieId: "1240838",
                picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
                name: "除暴",
                name2: "Caught in Time",
                type: [" 犯罪 ", " 剧情 ", " 动作 "],
                place: "中国香港,中国大陆",
                length: "95分钟",
                time: "2020-11-20中国大陆上映",
            },
            {
                movieId: "1240838",
                picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
                name: "除暴",
                name2: "Caught in Time",
                type: [" 犯罪 ", " 剧情 ", " 动作 "],
                place: "中国香港,中国大陆",
                length: "95分钟",
                time: "2020-11-20中国大陆上映",
            },
            {
                movieId: "1240838",
                picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
                name: "除暴",
                name2: "Caught in Time",
                type: [" 犯罪 ", " 剧情 ", " 动作 "],
                place: "中国香港,中国大陆",
                length: "95分钟",
                time: "2020-11-20中国大陆上映",
            },
            {
                movieId: "1240838",
                picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
                name: "除暴",
                name2: "Caught in Time",
                type: [" 犯罪 ", " 剧情 ", " 动作 "],
                place: "中国香港,中国大陆",
                length: "95分钟",
                time: "2020-11-20中国大陆上映",
            },
            {
                movieId: "1240838",
                picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
                name: "除暴",
                name2: "Caught in Time",
                type: [" 犯罪 ", " 剧情 ", " 动作 "],
                place: "中国香港,中国大陆",
                length: "95分钟",
                time: "2020-11-20中国大陆上映",
            },
            {
                movieId: "1240838",
                picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
                name: "除暴",
                name2: "Caught in Time",
                type: [" 犯罪 ", " 剧情 ", " 动作 "],
                place: "中国香港,中国大陆",
                length: "95分钟",
                time: "2020-11-20中国大陆上映",
            }
        ];
        console.log('FakeData:'+this);
        return movielist;
    }

    /**
     * 在组件挂载完成后调用
     */
    componentDidMount(){
        // TODO:向后段获取收藏电影列表
    }

    render(){
        const movieList=this.getFakeMovieList();
        const movieListItem=movieList.map(
                (movie,index)=>
                    <MovieCell className='movie-cell'
                        key={index}
                        movie={movie}
                    />
                
            )
          return (
              <div className="movie-list">
                  {movieListItem}
              </div>
          );  
    }
}