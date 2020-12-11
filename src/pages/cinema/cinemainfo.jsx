import React from 'react';
import './cinemainfo.less'
import Header from "../../components/header";
import {Link} from "react-router-dom";



export default class CinemaInfo extends React.Component {
    constructor(props) {
        super(props);
        var info= {
            id:1,
            picture: "https://p1.meituan.net/deal/201208/22/1_0822151022.jpg@292w_292h_1e_1c",
            name: "中宁国际影城（京新广场店）",
            address: "浦口区柳洲东路189号京新广场4楼",
            phone: "电话：025-58860601",
            price:30,
            distance:"1km",
            service: [
            {
                name:"退",
                text:"未取票用户放映前60分钟可退票"
            },
            {
                name:"改签",
                text:"未取票用户放映前60分钟可改签"
            },
            {
                name:"3D眼镜",
                text:"免押金"
            },
            {
                name:"可停车",
                text:"商场免费停车"}
        ]};
        var movies=[
            {
                movieId: "1240838",
                picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
                name: "除暴",
                name2: "Caught in Time",
                type: [" 犯罪 ", " 剧情 ", " 动作 "],
                place: "中国香港,中国大陆",
                length: "95分钟",
                time: "2020-11-20中国大陆上映",
                paipian:[
                    {
                        date:"12月9日",
                        plist:[
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            }
                        ]
                    },
                    {
                        date:"12月10日",
                        plist:[
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            }
                        ]
                    },
                    {
                        date:"12月11日",
                        plist:[
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            }
                        ]
                    }
                ]
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
                paipian:[
                    {
                        date:"12月9日",
                        plist:[
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            }
                        ]
                    },
                    {
                        date:"12月10日",
                        plist:[
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            }
                        ]
                    },
                    {
                        date:"12月11日",
                        plist:[
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            }
                        ]
                    }
                ]
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
                paipian:[
                    {
                        date:"12月9日",
                        plist:[
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            }
                        ]
                    },
                    {
                        date:"12月10日",
                        plist:[
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            }
                        ]
                    }
                ]
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
                paipian:[
                    {
                        date:"12月9日",
                        plist:[
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            }
                        ]
                    },
                    {
                        date:"12月11日",
                        plist:[
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            }
                        ]
                    }
                ]
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
                paipian:[
                    {
                        date:"12月9日",
                        plist:[
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            }
                        ]
                    },
                    {
                        date:"12月10日",
                        plist:[
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            }
                        ]
                    },
                    {
                        date:"12月11日",
                        plist:[
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            }
                        ]
                    }
                ]
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
                paipian:[
                    {
                        date:"12月9日",
                        plist:[
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            }
                        ]
                    },
                    {
                        date:"12月10日",
                        plist:[
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            }
                        ]
                    },
                    {
                        date:"12月11日",
                        plist:[
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            },
                            {
                                starttime:"21:00",
                                endtime:"23:00",
                                lang:"国语",
                                hall:"5号激光厅",
                                price:30
                            }
                        ]
                    }
                ]
            }
        ];
        this.state={
            id:this.props.location.id,
            info:info,
            movies:movies,
            selectedMovieIndex:0,
            selectedDateIndex:0
        };
        this.selectMovie=this.selectMovie.bind(this);
        this.selectPrevMovie=this.selectPrevMovie.bind(this);
        this.selectNextMovie=this.selectNextMovie.bind(this);
        this.selectDate=this.selectDate.bind(this);
    }

    update(){
        console.log(this.state.selectedMovieIndex)
    }
    selectMovie(index){
        this.setState(
            {
                selectedMovieIndex:index,
                selectedDateIndex:0
            },
            ()=>this.update()
        )
    }

    selectPrevMovie(){
        if(this.state.selectedMovieIndex===0){
            this.selectMovie(this.state.movies.length-1)
        }
        else{
            this.selectMovie(this.state.selectedMovieIndex-1)
        }
    }

    selectNextMovie(){
        if(this.state.selectedMovieIndex===this.state.movies.length-1){
            this.selectMovie(0)
        }
        else{
            this.selectMovie(this.state.selectedMovieIndex+1)
        }
    }

    selectDate(index){
        this.setState(
            {
                selectedDateIndex:index
            },
            ()=>this.update()
        )
    }

    render() {
        const selectedMovie=this.state.movies[this.state.selectedMovieIndex];
        const dateList=[];
        for(var i=0;i<selectedMovie.paipian.length;i++){
            dateList.push(selectedMovie.paipian[i].date)
        }
        const selectedPlist=selectedMovie.paipian[this.state.selectedDateIndex].plist.map(
            (p,index)=>
                <tr key={index} className={
                    index%2===0?"pline ":"pline even"
                }>
                    <td>
                        <span className="start-time">{p.starttime}</span>
                        <br/>
                        <span className="end-time">{p.endtime}</span>
                    </td>
                    <td>
                        <span className="lang">{p.lang}</span>
                    </td>
                    <td>
                        <span className="hall">{p.hall}</span>
                    </td>
                    <td>
                        <span className="sell-price">{p.price}</span>
                    </td>
                    <td>
                        <div className="buy-btn">
                            <Link to={{
                                pathname:"/cinemainfo",
                                id:0
                            }}>
                                <button>选座购票</button>
                            </Link>
                        </div>
                    </td>
                </tr>
        );

        return <div className="cinema-info">
            <Header index={-1}/>
            <div className="banner">
                <div className="wrapper">
                    <div className="cinema-left">
                        <div className="avatar-shadow">
                            <img className="avatar" src={this.state.info.picture} alt={this.state.info.name}/>
                        </div>
                    </div>
                    <div className="cinema-main">
                        <div className="cinema-brief-container">
                            <h1 className="name text-ellipsis">{this.state.info.name}</h1>
                            <div className="address text-ellipsis">{this.state.info.address}</div>
                            <div className="telephone">{this.state.info.phone}</div>
                            <div className="features-group">
                                <div className="group-title">影院服务</div>
                                {this.state.info.service.map(
                                    (service,index)=>
                                        <div className="feature" key={index}>
                                            <span className="tag">{service.name}</span>
                                            <p className="desc text-ellipsis">{service.text}</p>
                                        </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="cinema-map">

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="movie-list-container">
                    <div className="movie-list">
                        {
                            this.state.movies.map(
                                (movie,index)=>
                                    <div className={
                                        index===this.state.selectedMovieIndex?"movie active":"movie"
                                    } key={index} onClick={()=>this.selectMovie(index)}>
                                        <img src={movie.picture} alt={movie.name}/>
                                    </div>
                            )
                        }
                    </div>
                    <span className="scroll-prev scroll-btn" onClick={()=>this.selectPrevMovie()}/>
                    <span className="scroll-next scroll-btn" onClick={()=>this.selectNextMovie()}/>
                </div>
                <div className="show-list">
                    <div className="movie-info">
                        <h2 className="movie-name">{selectedMovie.name}</h2>
                        <div className="movie-desc">
                            <div>
                                <span className="key">时长：</span>
                                <span className="value">{selectedMovie.length}</span>
                            </div>
                            <div className="movie-type">
                                <span className="key">类型：</span>
                                <span className="value">{selectedMovie.type}</span>
                            </div>
                        </div>
                    </div>
                    <div className="show-date">
                        <span >观影时间：</span>
                        {
                            dateList.map(
                                (date,index)=>
                                    <span className={
                                        index===this.state.selectedDateIndex?"date-item active":"date-item"
                                    } key={index} onClick={()=>this.selectDate(index)}>
                                        {date}
                                    </span>
                            )
                        }
                    </div>
                    <div className="plist-container">
                        <table className="plist">
                            <thead>
                            <tr>
                                <th>放映时间</th>
                                <th>语言版本</th>
                                <th>放映厅</th>
                                <th>售价（元）</th>
                                <th>选座购票</th>
                            </tr>
                            </thead>
                            <tbody>
                            {selectedPlist}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    }
}
