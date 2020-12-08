import React from 'react';
import './movieinfo.less'

export default class MovieInfo extends React.Component{

    constructor(props){
        super(props);
        const info = {
            picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
            name: "除暴",
            name2: "Caught in Time",
            place: "中国香港,中国大陆",
            length: "95分钟",
            time: "2020-11-20中国大陆上映",
            description: "上世纪90年代，刑警钟诚受命追捕悍匪集团“老鹰帮”。这群悍匪犯下惊天连环劫案，训练有素且纪律严明，首领张隼更屡次恶意挑衅，矛头直指钟诚。为将“老鹰帮”捉拿归案，钟诚带领刑警小队咬死不放，誓与恶势力斗争到底。数年间，警匪上演了一次次紧张刺激的较量，悍匪愈加猖獗，警方步步逼近，双方展开殊死对决……"
        };
        const type = [" 犯罪 ", " 剧情 ", " 动作 "];
        const director={
            name:"刘浩良",
            url:"https://p0.meituan.net/moviemachine/d29e9b1f10a631918c8c98a296a0c36f30366.jpg@128w_170h_1e_1c"
        };
        const someactors=[
            {
                name:"王千源",
                url:"https://p0.meituan.net/moviemachine/1682480a9400f479772f2dcfc7b1dde1162980.jpg@128w_170h_1e_1c",
                text:"饰：钟诚"
            },
            {
                name:"春夏",
                url:"https://p1.meituan.net/moviemachine/c7cf3a5c0da2f688e119532edb0325ed38079.jpg@128w_170h_1e_1c",
                text:null
            },
            {
                name:"王千源",
                url:"https://p0.meituan.net/moviemachine/1682480a9400f479772f2dcfc7b1dde1162980.jpg@128w_170h_1e_1c",
                text:"饰：钟诚"
            },
            {
                name:"春夏",
                url:"https://p1.meituan.net/moviemachine/c7cf3a5c0da2f688e119532edb0325ed38079.jpg@128w_170h_1e_1c",
                text:null
            },
            {
                name:"王千源",
                url:"https://p0.meituan.net/moviemachine/1682480a9400f479772f2dcfc7b1dde1162980.jpg@128w_170h_1e_1c",
                text:"饰：钟诚"
            },
            {
                name:"春夏",
                url:"https://p1.meituan.net/moviemachine/c7cf3a5c0da2f688e119532edb0325ed38079.jpg@128w_170h_1e_1c",
                text:null
            }
        ];
        const actors = [
            {
                name:"王千源",
                url:"https://p0.meituan.net/moviemachine/1682480a9400f479772f2dcfc7b1dde1162980.jpg@128w_170h_1e_1c",
                text:"饰：钟诚"
            },
            {
                name:"春夏",
                url:"https://p1.meituan.net/moviemachine/c7cf3a5c0da2f688e119532edb0325ed38079.jpg@128w_170h_1e_1c",
                text:null
            },
            {
                name:"王千源",
                url:"https://p0.meituan.net/moviemachine/1682480a9400f479772f2dcfc7b1dde1162980.jpg@128w_170h_1e_1c",
                text:"饰：钟诚"
            },
            {
                name:"春夏",
                url:"https://p1.meituan.net/moviemachine/c7cf3a5c0da2f688e119532edb0325ed38079.jpg@128w_170h_1e_1c",
                text:null
            },
            {
                name:"王千源",
                url:"https://p0.meituan.net/moviemachine/1682480a9400f479772f2dcfc7b1dde1162980.jpg@128w_170h_1e_1c",
                text:"饰：钟诚"
            },
            {
                name:"春夏",
                url:"https://p1.meituan.net/moviemachine/c7cf3a5c0da2f688e119532edb0325ed38079.jpg@128w_170h_1e_1c",
                text:null
            },
            {
                name:"王千源",
                url:"https://p0.meituan.net/moviemachine/1682480a9400f479772f2dcfc7b1dde1162980.jpg@128w_170h_1e_1c",
                text:"饰：钟诚"
            },
            {
                name:"春夏",
                url:"https://p1.meituan.net/moviemachine/c7cf3a5c0da2f688e119532edb0325ed38079.jpg@128w_170h_1e_1c",
                text:null
            },
            {
                name:"王千源",
                url:"https://p0.meituan.net/moviemachine/1682480a9400f479772f2dcfc7b1dde1162980.jpg@128w_170h_1e_1c",
                text:"饰：钟诚"
            },
            {
                name:"春夏",
                url:"https://p1.meituan.net/moviemachine/c7cf3a5c0da2f688e119532edb0325ed38079.jpg@128w_170h_1e_1c",
                text:null
            }
        ];
        this.state={
            id:this.props.location.id,
            selectedContainerContentType:0,
            moviestate:"正在热映",
            info:info,
            type:type,
            director:director,
            someactors:someactors,
            actors:actors
        };
        this.changeContainerContentType=this.changeContainerContentType.bind(this)
    }

    componentDidMount() {
    }

    changeContainerContentType(type){
        this.setState({
            selectedContainerContentType:type
        })
    }

    render(){
        return <div className="movie-info">
            <div className="banner">
                <div className="wrapper">
                    <div className="celeinfo-left">
                        <div className="avatar-shadow">
                            <img className="avatar" src="https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c" alt={this.state.info.name}/>
                        </div>
                    </div>
                    <div className="celeinfo-right">
                        <div className="movie-brief-container">
                            <h1 className="name">{this.state.info.name}</h1>
                            <div className="subname">{this.state.info.name2}</div>
                            <ul>
                                <li className="movietypes">
                                    {this.state.type}
                                </li>
                                <li>
                                    {this.state.info.place+" "+this.state.info.length}
                                </li>
                                <li>
                                    {this.state.info.time}
                                </li>

                            </ul>
                        </div>
                        <div className="action-button">
                            <button className="wish">
                                    想看
                            </button>
                            <button className="score">
                                   评分
                            </button>
                        </div>
                        <div className="movie-status-container">
                            {
                                this.state.moviestate==="正在热映"?
                                    (<button className="buy-button">立即购票</button>
                                    ):(
                                    <button className="no-text">敬请期待</button>
                                    )
                            }
                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                {
                    this.state.selectedContainerContentType===0?
                        (
                            <div>
                                <div className="container-title">
                                    <div className="tab-title active">介绍</div>
                                    <div className="tab-title" onClick={()=>this.changeContainerContentType(1)}>演职人员</div>
                                </div>
                                <div className="container-content">
                                    <div className="module">
                                        <div className="module-title">
                                            <h2>剧情简介</h2>
                                        </div>
                                        <div className="module-content">
                                            <span className="dra">
                                                {this.state.info.description}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="module">
                                        <div className="module-title"><h2>演职人员</h2></div>
                                        <div className="module-content">
                                            <div className="celebrity-group">
                                                <div className="celebrity-type">导演</div>
                                                <div className="celebrity-list">
                                                    <div className="celebrity first">
                                                        <div className="portrait">
                                                            <img className="default-img" alt={this.state.director.name}
                                                                 src={this.state.director.url}
                                                            />
                                                        </div>
                                                        <div className="info">{this.state.director.name}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="celebrity-group">
                                                <div className="celebrity-type">演员</div>
                                                <div className="celebrity-list">
                                                    {this.state.someactors.map(
                                                        (actor,index)=>
                                                            <div className="celebrity" key={index}>
                                                                <div className="portrait">
                                                                    <img className="default-img" alt={actor.name}
                                                                         src={actor.url}
                                                                    />
                                                                </div>
                                                                <div className="info">{actor.name}</div>
                                                            </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ):(
                            <div>
                                <div className="container-title">
                                    <div className="tab-title" onClick={()=>this.changeContainerContentType(0)}>介绍</div>
                                    <div className="tab-title active">演职人员</div>
                                </div>
                                <div className="container-content">
                                    <div className="celebrity-container">
                                        <div className="celebrity-group">
                                            <div className="celebrity-type">导演</div>
                                            <div className="celebrity-list">
                                                <div className="celebrity">
                                                    <div className="portrait">
                                                        <img className="default-img" alt={this.state.director.name}
                                                             src={this.state.director.url}
                                                        />
                                                    </div>
                                                    <div className="info">{this.state.director.name}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="celebrity-group">
                                            <div className="celebrity-type">演员</div>
                                            <div className="celebrity-list">
                                                {this.state.actors.map(
                                                    (actor,index)=>
                                                        <div className="celebrity" key={index}>
                                                            <div className="portrait">
                                                                <img className="default-img" alt={actor.name}
                                                                     src={actor.url}
                                                                />
                                                            </div>
                                                            <div className="info">{actor.name}</div>
                                                        </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                }

            </div>
        </div>

    }
}
