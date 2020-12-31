import React from 'react';
import './cinemainfo.less'
import Header from "../../components/header";
import {Link} from "react-router-dom";
import {apiGetCinemaInfo, apiGetSchedule} from "../../api"
import {Empty} from "antd";


export default class CinemaInfo extends React.Component {
  constructor(props) {
    super(props);

    const {location} = this.props;

    let cinemaId, movieId, iflogged, uid, token;
    if (localStorage.getItem("id")) {
      uid = localStorage.getItem("id");
      token = localStorage.getItem("token");
      iflogged = true;
    } else {
      iflogged = false;
    }

    if (location.state && location.state.id) {//判断当前有参数
      cinemaId = location.state.id;
      movieId = location.state.movieId;
      sessionStorage.setItem('cinemaId', cinemaId);// 存入到sessionStorage中
      sessionStorage.setItem('movieId', movieId)
    } else {
      cinemaId = sessionStorage.getItem('cinemaId');// 当state没有参数时，取sessionStorage中的参数
      movieId = sessionStorage.getItem('movieId');
    }
    //console.log(cinemaId)
    // var info = {
    //   id: 1,
    //   picture: "https://p1.meituan.net/deal/201208/22/1_0822151022.jpg@292w_292h_1e_1c",
    //   name: "中宁国际影城（京新广场店）",
    //   address: "浦口区柳洲东路189号京新广场4楼",
    //   phone: "电话：025-58860601",
    //   price: 30,
    //   distance: "1km",
    //   services: []
    // };
    var movies = [
      {
        movieBasic: {
          movieId: "1240838",
          picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
          name: "除暴",
          name2: "Caught in Time",
          type: [" 犯罪 ", " 剧情 ", " 动作 "],
          place: "中国香港,中国大陆",
          length: "95分钟",
          time: "2020-11-20中国大陆上映",
        },
        schedules: [
          {
            date: 0,
            plist: [
              {
                starttime: "21:00",
                endtime: "23:00",
                lang: "国语",
                hall: "5号激光厅",
                price: 30
              }
            ]
          }
        ]
      },
    ];
    this.state = {
      iflogged: iflogged,
      uid: uid,
      token: token,
      id: cinemaId,
      info: null,
      movies: movies,
      selectedMovieIndex: 0,
      selectedDateIndex: 0
    };
    apiGetCinemaInfo(cinemaId).then((res) => {
      //console.log(res);
      this.setState({
        info: res.data
      })
    });


    apiGetSchedule(cinemaId).then((res) => {
      //console.log(res);
      let index = 0;
      if (movieId !== undefined) {
        for (var i = 0; i < 6; i++) {
          if (res.data[i].movieBasic.movieId === movieId) {
            index = i;
          }
        }
      }

      this.setState({
        movies: res.data,
        selectedMovieIndex: index
      })
    });

    this.selectMovie = this.selectMovie.bind(this);
    this.selectPrevMovie = this.selectPrevMovie.bind(this);
    this.selectNextMovie = this.selectNextMovie.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.goTop = this.goTop.bind(this);
  }

  update() {
    //console.log(this.state.selectedMovieIndex)
  }

  selectMovie(index) {
    this.setState(
      {
        selectedMovieIndex: index,
        selectedDateIndex: 0
      },
      () => this.goTop()
    )
  }

  selectPrevMovie() {
    if (this.state.selectedMovieIndex === 0) {
      this.selectMovie(this.state.movies.length - 1)
    } else {
      this.selectMovie(this.state.selectedMovieIndex - 1)
    }
  }

  selectNextMovie() {
    if (this.state.selectedMovieIndex === this.state.movies.length - 1) {
      this.selectMovie(0)
    } else {
      this.selectMovie(this.state.selectedMovieIndex + 1)
    }
  }

  selectDate(index) {
    this.setState(
      {
        selectedDateIndex: index
      },
      () => this.goTop()
    )
  }

  goTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 350
  }

  render() {
    //var dateNum=Math.ceil(Math.random()*6)+1;
    //var paipianNum=Math.ceil(Math.random()*2)+1;


    if (this.state.info) {
      var dateNum = 3;
      console.log(this.state.selectedMovieIndex)
      let selectedMovie = this.state.movies[this.state.selectedMovieIndex].movieBasic;
      let schedules = this.state.movies[this.state.selectedMovieIndex].schedules;

      let dateList = [];
      let dateJudges = [];
      if (schedules.length > 0) {
        for (var k = 0; k < 3; k++) {
          let judge = false;
          for (var i = 0; i < schedules.length; i++) {
            if (schedules[i].date === k) {
              judge = true;
              break;
            }
          }
          dateJudges.push(judge)

        }
      }

      for (i = 0; i < dateNum; i++) {
        if (dateJudges[i]) {
          let k = 0;
          if (selectedMovie.state === 1) {
            k = 7;
          }
          var date1 = new Date();
          var date2 = new Date(date1);
          date2.setDate(date1.getDate() + i + k+1);
          var time2 = (date2.getMonth() + 1) + "-" + (date2.getDate());
          dateList.push(time2)
        }
      }

      let plist = [];
      let dateIndex = this.state.selectedDateIndex;

      let selectedPlist = [];

      if (schedules.length > 0) {
        for (i = 0; i < schedules.length; i++) {
          let k = 0;
          if (selectedMovie.state === 1) {
            k = 7;
          }
          date1 = new Date();
          date2 = new Date(date1);
          date2.setDate(date1.getDate() + schedules[i].date + k+1);
          time2 = (date2.getMonth() + 1) + "-" + (date2.getDate());
          //console.log(time2)
          if (time2 === dateList[dateIndex]) {
            plist.push(schedules[i])
          }
        }
        //console.log(dateList[dateIndex],plist)

        selectedPlist = plist.map(
          (p, index) =>
            <tr key={index} className={
              index % 2 === 0 ? "pline " : "pline even"
            }>
              <td>
                <span className="start-time">{p.session}</span>
              </td>
              <td>
                <span className="lang">国语</span>
              </td>
              <td>
                <span className="hall">{p.hall}</span>
              </td>
              <td>
                <span className="sell-price">{p.price}</span>
              </td>
              <td>
                {this.state.iflogged ?
                  <div className="buy-btn">
                    <Link to={

                      {
                        pathname: "/seatbuy",
                        state: {
                          uid: this.state.uid,
                          token: this.state.token,
                          movieinfo: this.state.movies[this.state.selectedMovieIndex].movieBasic,
                          paipian: {
                            cinema: this.state.info.name,
                            date: dateList[this.state.selectedDateIndex],
                            session: p.session,
                            lang: "国语",
                            hall: p.hall,
                            price: p.price
                          }
                        }
                      }}>
                      <button>选座购票</button>
                    </Link>
                  </div> : <div>请先登录以购票</div>
                }
              </td>
            </tr>
        );

      }
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
                  {this.state.info.services.map(
                    (service, index) =>
                      <div className="feature" key={index}>
                        <span className="tag">{service.name}</span>
                        <p className="desc text-ellipsis">{service.detail}</p>
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
                  (movie, index) =>
                    <div className={
                      index === this.state.selectedMovieIndex ? "movie active" : "movie"
                    } key={index} onClick={() => this.selectMovie(index)}>
                      <img src={movie.movieBasic.picture} alt={movie.movieBasic.c_name}/>
                    </div>
                )
              }
            </div>
            <span className="scroll-prev scroll-btn" onClick={() => this.selectPrevMovie()}/>
            <span className="scroll-next scroll-btn" onClick={() => this.selectNextMovie()}/>
          </div>
          <div className="show-list">
            <div className="movie-info">
              <h2 className="movie-name">{selectedMovie.c_name}</h2>
              <div className="movie-desc">
                <div>
                  <span className="key">时长：</span>
                  <span className="value">{selectedMovie.length}分钟</span>
                </div>
                <div className="movie-type">
                  <span className="key">类型：</span>
                  <span className="value">{selectedMovie.type}</span>
                </div>
              </div>
            </div>
            <div className="show-date">
              <span>观影时间：</span>
              {
                dateList.map(
                  (date, index) =>
                    <span className={
                      index === this.state.selectedDateIndex ? "date-item active" : "date-item"
                    } key={index} onClick={() => this.selectDate(index)}>
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
        <div className={"bottom"}/>
      </div>
    } else {
      return <Empty/>
    }
  }
}
