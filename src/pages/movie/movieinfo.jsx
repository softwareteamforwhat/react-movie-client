import React from 'react';
import './movieinfo.less'
import Header from "../../components/header";
import MovieBanner from '../../components/movie/moviebanner'


import {apiGetMovieInfo, apiIfCollected} from "../../api"
import {apiChangeFollow} from "../../api";
import {Empty} from "antd";

export default class MovieInfo extends React.Component {

  constructor(props) {
    super(props);
    // const info = {
    //   id: this.props.location.state.id,
    //   picture: "https://p1.meituan.net/movie/38dd31a0e1b18e1b00aeb2170c5a65b13885486.jpg@464w_644h_1e_1c",
    //   name: "除暴",
    //   name2: "Caught in Time",
    //   place: "中国香港,中国大陆",
    //   length: "95分钟",
    //   time: "2020-11-20中国大陆上映",
    //   rank: 4,
    //   description: "上世纪90年代，刑警钟诚受命追捕悍匪集团“老鹰帮”。这群悍匪犯下惊天连环劫案，训练有素且纪律严明，首领张隼更屡次恶意挑衅，矛头直指钟诚。为将“老鹰帮”捉拿归案，钟诚带领刑警小队咬死不放，誓与恶势力斗争到底。数年间，警匪上演了一次次紧张刺激的较量，悍匪愈加猖獗，警方步步逼近，双方展开殊死对决……"
    // };
    const type = [];
    const director = {
      name: "刘浩良",
      url: "https://p0.meituan.net/moviemachine/d29e9b1f10a631918c8c98a296a0c36f30366.jpg@128w_170h_1e_1c"
    };
    const someactors = [];
    const actors = [];
    let iflogged, uid, ifFollowed, token;
    iflogged = false;
    ifFollowed = false;
    console.log(localStorage,iflogged)
    if (localStorage.getItem("id")) {
      uid = localStorage.getItem("id");
      token = localStorage.getItem("token");
      iflogged = true;
    }

    console.log(iflogged,token)

    this.state = {
      movieId: this.props.location.state.id,
      selectedContainerContentType: 0,
      moviestate: "正在热映",
      info: null,
      type: type,
      director: director,
      someactors: someactors,
      actors: actors,
      iflogged: iflogged,
      uid: uid,
      token: token,
      ifFollowed: ifFollowed
    };
    apiGetMovieInfo(this.props.location.state.id).then((res) => {
      console.log(res);
      const data = res.data;
      const info = {
        id: this.props.location.state.id,
        picture: data.picture,
        name: data.c_name,
        name2: data.e_name,
        place: data.area,
        length: data.length + "分钟",
        time: data.date + "上映",
        description: data.description,
        rank: data.rank * 0.5
      };
      let movieState = "正在热映";
      if (data.state === 1) movieState = "即将上映";
      if (data.state === 2) movieState = "经典影片";
      let someActors = [];
      for (var i = 0; i < 6 && i < data.actors.length; i++) {
        someActors.push(data.actors[i])
      }
      this.setState({
        moviestate: movieState,
        info: info,
        type: data.type,
        director: data.director,
        someactors: someActors,
        actors: data.actors
      })

    });
    if (iflogged) {
      apiIfCollected(uid, this.props.location.state.id, token).then(
        (res) => {
          console.log(res);
          this.setState({
              ifFollowed: res.data
            }
          )
        }
      )
    }

    this.changeContainerContentType = this.changeContainerContentType.bind(this);
    this.changeFollowState = this.changeFollowState.bind(this);
  }


  changeFollowState() {
    apiChangeFollow(this.state.uid, this.state.movieId, this.state.token);
    const current = this.state.ifFollowed;
    this.setState({
      ifFollowed: !current
    })
  }

  changeContainerContentType(type) {
    this.setState({
      selectedContainerContentType: type
    })
  }

  render() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    if (this.state.info) {
      return <div className="movie-info">
        <Header index={-1}/>
        <MovieBanner
          info={this.state.info}
          type={this.state.type}
          moviestate={this.state.moviestate}
          linktype={1}
          iflogged={this.state.iflogged}
          id={this.state.movieId}
          ifFollowed={this.state.ifFollowed}
          changeFollowState={this.changeFollowState}
        />
        <div className="container">
          {
            this.state.selectedContainerContentType === 0 ?
              (
                <div>
                  <div className="container-title">
                    <div className="tab-title active">介绍</div>
                    <div className="tab-title" onClick={() => this.changeContainerContentType(1)}>演职人员</div>
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
                                     src={this.state.director.link}
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
                              (actor, index) =>
                                <div className="celebrity" key={index}>
                                  <div className="portrait">
                                    <img className="default-img" alt={actor.name}
                                         src={actor.link}
                                    />
                                  </div>
                                  <div className="info">{actor.name}
                                   </div>
                                </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="container-title">
                    <div className="tab-title" onClick={() => this.changeContainerContentType(0)}>介绍</div>
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
                                   src={this.state.director.link}
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
                            (actor, index) =>
                              <div className="celebrity" key={index}>
                                <div className="portrait">
                                  <img className="default-img" alt={actor.name}
                                       src={actor.link}
                                  />
                                </div>
                                <div className="info">{actor.name}

                                </div>
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
    } else {
      return <Empty/>
    }

  }
}
