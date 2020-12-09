import React, {Component} from 'react';
import MovieCell from '../../components/movie/moviecell'
import Header from "../../components/header";

import './movies.less';


class SelectCell extends Component {
    constructor(props) {
        super(props);
        this.changeMovieState = this.changeMovieState.bind(this);
    }

    changeMovieState(index) {
        this.props.changeMovieState(index, this.props.type);
    }

    render() {
        if (this.props.selected) {
            return <li>
                <button className="moviestate selected">{this.props.value}</button>
            </li>
        } else {
            return <li>
                <button className="moviestate"
                        onClick={() => this.changeMovieState(this.props.index)}>{this.props.value}</button>
            </li>
        }
    }

}

class TagCell extends Component {
    constructor(props) {
        super(props);
        this.changeMovieState = this.changeMovieState.bind(this);
    }

    changeMovieState(index) {
        this.props.changeMovieState(index, this.props.type);
    }

    render() {
        if (this.props.selected) {
            return <button className="tag selected">{this.props.value}</button>
        } else {
            return <button className="tag"
                           onClick={() => this.changeMovieState(this.props.index)}>{this.props.value}</button>
        }
    }
}


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.changeMovieState = this.changeMovieState.bind(this);
    }

    changeMovieState(index, type) {
        this.props.changeMovieState(index, type);
    }

    render() {
        const movieStatesList = this.props.moviestates.map(
            (moviestate, index) =>
                <SelectCell
                    key={index}
                    selected={index === this.props.selectedMovieStateIndex}
                    value={moviestate}
                    index={index}
                    changeMovieState={this.changeMovieState}
                    type={0}
                />
        );

        const movieTypesList = this.props.movietypes.map(
            (movietype, index) =>
                <TagCell
                    key={index}
                    selected={index === this.props.selectedMovieTypeIndex}
                    value={movietype}
                    index={index}
                    changeMovieState={this.changeMovieState}
                    type={1}
                />
        );

        const areasList = this.props.areas.map(
            (area, index) =>
                <TagCell
                    key={index}
                    selected={index === this.props.selectedAreaIndex}
                    value={area}
                    index={index}
                    changeMovieState={this.changeMovieState}
                    type={2}
                />
        );

        const yearsList = this.props.years.map(
            (year, index) =>
                <TagCell
                    key={index}
                    selected={index === this.props.selectedYearIndex}
                    value={year}
                    index={index}
                    changeMovieState={this.changeMovieState}
                    type={3}
                />
        );

        const sortTypesList = this.props.sorttypes.map(
            (sorttype, index) =>
                <TagCell
                    key={index}
                    selected={index === this.props.selectedSortTypeIndex}
                    value={sorttype}
                    index={index}
                    changeMovieState={this.changeMovieState}
                    type={4}
                />
        );
        return (
            <div className='search-bar'>
                <div className="subnav">
                    <ul className="navbar">
                        {movieStatesList}
                    </ul>
                </div>
                <div className="tags-lines">
                    <div className="tags-line">
                        <div className="tags-title">类型 :</div>
                        <div className="tags">
                            {movieTypesList}
                        </div>
                    </div>
                    <div className="tags-line">
                        <div className="tags-title">区域 :</div>
                        <div className="tags">
                            {areasList}
                        </div>
                    </div>
                    <div className="tags-line">
                        <div className="tags-title">年份 :</div>
                        <div className="tags">
                            {yearsList}
                        </div>
                    </div>
                    <div className="tags-line">
                        <div className="tags-title">排序 :</div>
                        <div className="tags">
                            {sortTypesList}
                        </div>
                    </div>
                </div>


            </div>


        );
    }


}

class MoviePanel extends Component {

    render() {
        const movieList = this.props.movielist.map(
            (movie, index) =>
                <MovieCell
                    key={index}
                    movie={movie}
                />
        );
        return <div className="movie-list">
            {movieList}
        </div>
    }
}

export default class Movies extends Component {
    constructor(props) {
        super(props);
        var movielist = [
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
        var moviestates = ["正在热映", "即将上映", "经典影片"];
        var movietypes = ["全部", "爱情", "喜剧", "动画", "剧情", "恐怖", "惊悚", "科幻", "动作", "悬疑", "犯罪", "冒险", "战争",
            "奇幻", "运动", "家庭", "古装", "武侠", "西部", "历史", "传记", "歌舞", "短片", "纪录片", "黑色电影"];
        var areas = ["全部", "大陆", "美国", "韩国", "日本", "中国香港", "中国台湾", "泰国", "印度", "法国", "英国", "俄罗斯",
            "意大利", "西班牙", "德国", "波兰", "澳大利亚", "伊朗", "其他"];
        var years = ["全部", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011",
            "2000-2010", "90年代", "80年代", "70年代", "更早"];
        var sorttypes = ["热门", "时间", "评分"];
        this.state = {
            movielist: movielist,
            moviestates: moviestates,
            movietypes: movietypes,
            areas: areas,
            years: years,
            sorttypes: sorttypes,
            selectedMovieStateIndex: 0,
            selectedMovieTypeIndex: 0,
            selectedAreaIndex: 0,
            selectedYearIndex: 0,
            selectedSortTypeIndex: 0,
            page:0
        };
        this.updateMovieList = this.updateMovieList.bind(this);
        this.changeMovieState = this.changeMovieState.bind(this);
    }

    updateMovieList() {

        const searchMovieForm={
            moviestate:this.state.moviestates[this.state.selectedMovieStateIndex],
            movietype:this.state.movietypes[this.state.selectedMovieTypeIndex],
            area:this.state.areas[this.state.selectedAreaIndex],
            year:this.state.years[this.state.selectedYearIndex],
            sorttype:this.state.sorttypes[this.state.selectedSortTypeIndex],
            page:this.state.page
        };
        console.log(searchMovieForm);
    }

    changeMovieState(index, type) {
        if (type === 0) {
            this.setState(
                {selectedMovieStateIndex: index},
                () => this.updateMovieList()
            )
        } else if (type === 1) {
            this.setState(
                {selectedMovieTypeIndex: index},
                () => this.updateMovieList()
            )
        } else if (type === 2) {
            this.setState(
                {selectedAreaIndex: index},
                () => this.updateMovieList()
            )
        } else if (type === 3) {
            this.setState(
                {selectedYearIndex: index},
                () => this.updateMovieList()
            )
        } else if (type === 4) {
            this.setState(
                {selectedSortTypeIndex: index},
                () => this.updateMovieList()
            )
        } else {

        }

    }

    render() {
        return (
            <div className='movies'>
                <Header index={1}/>
                <SearchBar
                    moviestates={this.state.moviestates}
                    selectedMovieStateIndex={this.state.selectedMovieStateIndex}
                    movietypes={this.state.movietypes}
                    selectedMovieTypeIndex={this.state.selectedMovieTypeIndex}
                    areas={this.state.areas}
                    selectedAreaIndex={this.state.selectedAreaIndex}
                    years={this.state.years}
                    selectedYearIndex={this.state.selectedYearIndex}
                    sorttypes={this.state.sorttypes}
                    selectedSortTypeIndex={this.state.selectedSortTypeIndex}
                    changeMovieState={this.changeMovieState}
                />
                <MoviePanel
                    movielist={this.state.movielist}
                />
            </div>

        );
    }

}
