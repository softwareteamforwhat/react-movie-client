import React, {Component} from 'react';
import MovieCell from '../../components/movie/moviecell'
import Header from "../../components/header";
import {Pagination} from "antd";
import {apiGetMovies} from "../../api"

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
            return <a className="tag selected">{this.props.value}</a>
        } else {
            return <a className="tag"
                           onClick={() => this.changeMovieState(this.props.index)}>{this.props.value}</a>
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

        var moviestates = ["正在热映", "即将上映", "经典影片"];
        var movietypes = ["全部", "爱情", "喜剧", "动画", "剧情", "恐怖", "惊悚", "科幻", "动作", "悬疑", "犯罪", "冒险", "战争",
            "奇幻", "运动", "家庭", "古装", "武侠", "西部", "历史", "传记", "歌舞", "短片", "纪录片", "黑色电影"];
        var areas = ["全部", "大陆", "美国", "韩国", "日本", "中国香港", "中国台湾", "泰国", "印度", "法国", "英国", "俄罗斯",
            "意大利", "西班牙", "德国", "波兰", "澳大利亚", "伊朗", "其他"];
        var years = ["全部", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011",
            "2000-2010", "90年代", "80年代", "70年代", "更早"];
        var sorttypes = ["热门", "时间", "评分"];
        const searchMovieForm={
            "movieState":0,
            "movieType":"" ,
            "area":"",
            "year":"全部",
            "sortType":"时间",
            "page":1
        };
        this.state = {
            movielist:[],
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
            total:0,
            current:1
        };
        apiGetMovies(searchMovieForm).then((res)=>{
            console.log(res);
            var movielist = res.data.movieBasics;
            this.setState({
                movielist:movielist,
                total:res.data.sum
            })
        });

        this.updateMovieList = this.updateMovieList.bind(this);
        this.changeMovieState = this.changeMovieState.bind(this);
    }
    onChange = (page, pageSize=15) => {
        this.setState({
                current: page,
            },
            ()=>this.updateMovieList(page) )
    };

    goTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 500
    }

    updateMovieList(page=1) {
        const searchMovieForm={
            movieType:this.state.movietypes[this.state.selectedMovieTypeIndex],
            area:this.state.areas[this.state.selectedAreaIndex],
            year:this.state.years[this.state.selectedYearIndex],
            sortType:this.state.sorttypes[this.state.selectedSortTypeIndex],
            page:page
        };
        if(searchMovieForm.movieType==="全部")searchMovieForm.movieType="";
        if(searchMovieForm.area==="全部")searchMovieForm.area="";
        switch (this.state.moviestates[this.state.selectedMovieStateIndex]) {
            case "正在热映":searchMovieForm.movieState=0;break;
            case "即将上映":searchMovieForm.movieState=1;break;
            case "经典影片":searchMovieForm.movieState=2;break;
            default:break
        }
        apiGetMovies(searchMovieForm).then((res)=>{
            console.log(res);
            this.setState({
                movielist:res.data.movieBasics,
                total:res.data.sum,
                current:page
            })
        })
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
                <div className='movies-container'>
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
                    <div className={"page-bar"}>
                        <Pagination  defaultCurrent={1}current={this.state.current} total={this.state.total} pageSize={18} onChange={this.onChange} showSizeChanger={false}/>
                    </div>
                </div>

            </div>

        );
    }

}
